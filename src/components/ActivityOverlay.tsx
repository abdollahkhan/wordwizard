import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const ActivityOverlay = ({display}: {display: boolean}) => {
  if (!display) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 10,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000BF',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ActivityOverlay;
