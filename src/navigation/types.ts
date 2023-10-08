import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Results: {query: string};
};

export type ScreenProps<ScreenName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, ScreenName>;
