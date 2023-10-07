import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const SearchScreen = ({navigation}: Props) => {
  const onSearchClick = () => {
    if (query) {
      navigation.navigate('Results', {query});
    }
  };

  const [query, setQuery] = useState('');

  return (
    <SafeAreaView>
      <View style={style.inputWrapper}>
        <TextInput
          onChangeText={setQuery}
          value={query}
          placeholder="Search..."
          style={style.input}
        />
        <TouchableOpacity
          onPress={onSearchClick}
          disabled={!query}
          style={style.button}>
          <Text>O</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;

const style = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    backgroundColor: 'white',
  },
  button: {
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
