import React from 'react';
import Modal from 'react-native-modal';
import {Dimensions, Image, StyleSheet} from 'react-native';

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
      <Image
        source={{uri}}
        style={{width: windowWidth, height: height}}
        resizeMode="contain"
        onLoadEnd={() => {
          //TODO: Add loader and close here
          console.log('loaded');
        }}
      />
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
