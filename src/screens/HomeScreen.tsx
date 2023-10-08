import React, {useState} from 'react';
import {View, TextInput, Text, Pressable, StyleSheet} from 'react-native';

import {ScreenProps} from '../navigation/types';

const HomeScreen = (props: ScreenProps<'Home'>) => {
  const {navigation} = props;
  const [query, setQuery] = useState('');

  const onSearch = () => {
    navigation.navigate('Results', {query});
  };

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.input}
        placeholder="Search for a word..."
        value={query}
        onChangeText={setQuery}
      />
      <Pressable onPress={onSearch}>
        <Text>Search</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
});
