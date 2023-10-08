import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import ActivityOverlay from './ActivityOverlay';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type ImagePreviewProps = {
  uri: string;
  closeModal: () => void;
  imageWidth: number;
  imageHeight: number;
};

const ImagePreview = (props: ImagePreviewProps) => {
  const {uri, closeModal, imageWidth, imageHeight} = props;
  const aspectRatio = imageWidth / imageHeight;
  const height = windowWidth / aspectRatio;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal
      isVisible={!!uri}
      coverScreen={false}
      animationIn={'bounceInUp'}
      deviceWidth={windowWidth}
      deviceHeight={windowHeight}
      hasBackdrop={true}
      backdropColor="black"
      backdropOpacity={0.7}
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      style={styles.container}>
      <View style={{width: windowWidth, height: height}}>
        <ActivityOverlay display={isLoading} />
        <Image
          source={{uri}}
          style={{width: windowWidth, height: height}}
          resizeMode="contain"
          onLoadEnd={() => {
            setIsLoading(false);
          }}
        />
      </View>
    </Modal>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    margin: 0,
  },
});
