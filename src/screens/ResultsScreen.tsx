import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import {ScreenProps} from '../navigation/types';
import ImagePreview from '../components/ImagePreview';
import {ImageResult} from '../apis/types';
import {getImages} from '../apis/image';
import Input from '../components/Input';
import getCorrectWords from '../lib/Speller';
import NotFoundSVG from './../assets/icons/not-found.svg';
import ActivityOverlay from '../components/ActivityOverlay';

const ResultsScreen = ({route}: ScreenProps<'Results'>) => {
  let {query: _query} = route.params;
  const [images, setImages] = useState<ImageResult[]>([]);
  const [query, setQuery] = useState(_query);
  const [correctWord, setCorrectWord] = useState('');
  const [isFetchingImages, setIsFetchingImages] = useState(true);
  const [previewingImage, setPreviewingImage] = useState<ImageResult | null>(
    null,
  );

  const onValueChange = (value: string) => {
    setQuery(value);
  };

  const renderItem = ({item}: {item: ImageResult}) => {
    return (
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() => setPreviewingImage(item)}>
        <Image
          style={[styles.image]}
          source={{uri: item.urls.raw}}
          resizeMode="cover"
        />
      </TouchableOpacity>
    );
  };

  const onCorrectWord = useCallback((word: string) => {
    if (word && word.length > 2) {
      const correctWords = getCorrectWords(word);
      const fetchFor = correctWords.length ? correctWords[0] : word;
      setCorrectWord(fetchFor);
      setQuery(fetchFor);
      setIsFetchingImages(false);
    }
  }, []);

  // Effects only on mount
  useEffect(() => onCorrectWord(_query), [_query, onCorrectWord]);

  // Effects when word correct happens
  useEffect(() => {
    const fetchImages = async () => {
      setIsFetchingImages(true);
      try {
        const data = await getImages({query: correctWord});
        setImages(data.results);
      } catch {
        //TODO: Handle error by toasting or displaing proper message
        (e: any) => console.error(e);
      }
      setIsFetchingImages(false);
    };

    if (correctWord) {
      fetchImages();
    }
  }, [correctWord]);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityOverlay display={isFetchingImages} />
      <View style={styles.content}>
        <Input
          value={query}
          placeholder="Search for a word..."
          onChangeText={onValueChange}
          submit={() => onCorrectWord(query)}
        />
        {!images?.length && !isFetchingImages ? (
          <View style={styles.notFound}>
            <NotFoundSVG />
          </View>
        ) : (
          <FlatList
            data={images}
            renderItem={renderItem}
            numColumns={2}
            style={styles.imagesList}
            keyExtractor={item => item.id}
          />
        )}
      </View>
      {previewingImage?.urls?.raw ? (
        <ImagePreview
          uri={previewingImage.urls.raw || ''}
          imageHeight={previewingImage?.height || 1}
          imageWidth={previewingImage?.width || 1}
          closeModal={() => setPreviewingImage(null)}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    padding: 16,
  },
  imagesList: {
    marginVertical: 16,
  },
  imageWrapper: {
    width: '50%',
    padding: 4,
  },
  image: {
    backgroundColor: 'silver',
    aspectRatio: 1,
    borderRadius: 10,
  },
  notFound: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },
});
