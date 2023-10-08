import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type SuggestedItemProps = {
  word: string;
  onPress: (word: string) => void;
};
const SuggestedItem = (props: SuggestedItemProps) => {
  const {word, onPress} = props;
  return (
    <Pressable style={styles.suggestedItem} onPress={() => onPress(word)}>
      <Text style={styles.suggestedItemText}>{word}</Text>
    </Pressable>
  );
};

export default SuggestedItem;

const styles = StyleSheet.create({
  suggestedItem: {
    backgroundColor: '#d6d6d6',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderColor: 'rgba(0,0,0,0.1)',
    elevation: 1,
  },
  suggestedItemText: {
    fontSize: 16,
  },
});
