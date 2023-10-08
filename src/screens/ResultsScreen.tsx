import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {ScreenProps} from '../navigation/types';
import ImagePreview from '../components/ImagePreview';
import {ImageResult} from '../apis/types';
import {getImages} from '../apis/image';

const ResultsScreen = ({route}: ScreenProps<'Results'>) => {
  const {query} = route.params;
  const [images, setImages] = useState<ImageResult[]>([]);
  const [previewingImage, setPreviewingImage] = useState<ImageResult | null>(
    null,
  );

  const renderItem = ({item}: {item: ImageResult}) => {
    return (
      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() => setPreviewingImage(item)}>
        <Image style={styles.image} source={{uri: item.urls.raw}} />
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await getImages({query});
        setImages(data.results);
      } catch {
        //TODO: Handle error by toasting or displaing proper message
        (e: any) => console.error(e);
      }
    };
    fetchImages();
  }, [query]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.grid}
        keyExtractor={item => item.id}
      />
      <ImagePreview
        uri={previewingImage?.urls?.full || ''}
        closeModal={() => setPreviewingImage(null)}
      />
    </SafeAreaView>
  );
};

export default ResultsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  grid: {
    backgroundColor: 'red',
    padding: 16,
  },
  imageWrapper: {
    width: '50%',
  },
  image: {
    backgroundColor: 'green',
    aspectRatio: 1,
    padding: 10,
  },
});
