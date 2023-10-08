import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Pressable,
  TextInputProps,
} from 'react-native';

import SearchIcon from './../assets/icons/search.svg';

interface IInputProps extends TextInputProps {
  value: string;
  onChangeText: (value: string) => void;
  submit: () => void;
}

const Input = (props: IInputProps) => {
  const {submit} = props;

  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.input} />
      <Pressable onPress={submit}>
        <SearchIcon />
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 8,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    elevation: 5,
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    width: '90%',
    fontSize: 18,
  },
});
