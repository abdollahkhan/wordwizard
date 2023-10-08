import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {ScreenProps} from '../navigation/types';
import Input from '../components/Input';
import WordWizardSVG from './../assets/icons/word-wizard.svg';

const HomeScreen = (props: ScreenProps<'Home'>) => {
  const {navigation} = props;
  const [query, setQuery] = useState('');

  const onSubmit = () => {
    navigation.navigate('Results', {query});
  };

  const onValueChange = (value: string) => {
    setQuery(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        contentContainerStyle={styles.keyboardView}>
        <View style={styles.content}>
          <WordWizardSVG />
          <Input
            value={query}
            placeholder="Search for a word..."
            onChangeText={onValueChange}
            submit={onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    display: 'flex',
    paddingHorizontal: 16,
    marginTop: 150,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
  },
});
