import Dictionary from '../assets/dictionary.json';
const dictionary: {[key: string]: string[]} = Dictionary;

const cleanWord = (word: string) => {
  return word.replace(/[^a-zA-Z0-9]/g, '');
};

const isConsonant = (character: string) => {
  return !['a', 'e', 'i', 'o', 'u'].includes(character);
};

const getCorrectWords = (_word: string) => {
  const word = cleanWord(_word).toLowerCase();
  const correctWords: string[] = [];
  if (!word) {
    return correctWords;
  }

  dictionary[word.length].forEach((dictionary_word: string) => {
    dictionary_word = dictionary_word.toLowerCase();
    let matched = true;
    for (let i = 0; i < word.length; i++) {
      if (isConsonant(word[i]) && word[i] !== dictionary_word[i]) {
        matched = false;
        break;
      }
    }
    if (matched) {
      correctWords.push(dictionary_word);
    }
  });
  return correctWords;
};

export default getCorrectWords;
