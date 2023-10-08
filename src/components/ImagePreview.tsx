import React from 'react';
import Modal from 'react-native-modal';
import {Button, Dimensions, Image, StyleSheet, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

type ImagePreviewProps = {
  uri: string;
  closeModal: () => void;
};

const ImagePreview = (props: ImagePreviewProps) => {
  const {uri, closeModal} = props;
  return (
    <Modal
      isVisible={!!uri}
      coverScreen={false}
      animationIn={'bounceInUp'}
      deviceWidth={windowWidth}
      deviceHeight={windowHeight}
      style={styles.container}>
      <View style={styles.imageWrapper}>
        <Button title="Hide modal" onPress={closeModal} />
        <Image source={{uri}} style={styles.image} />
      </View>
    </Modal>
  );
};

export default ImagePreview;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    width: windowWidth,
    height: windowHeight,
    padding: 0,
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
