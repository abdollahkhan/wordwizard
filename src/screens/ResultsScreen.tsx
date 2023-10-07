import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView, Text} from 'react-native';
import {RootStackParamList} from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Results'>;

const ResultsScreen = ({route}: Props) => {
  const {query} = route.params;

  return (
    <SafeAreaView>
      <Text>Results: {query}</Text>
    </SafeAreaView>
  );
};

export default ResultsScreen;
