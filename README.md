# Words Wizard

### Features and Implementation

A two-screen app: Users input a word on the home screen, it's checked for correctness, possibly auto-corrected, and an API call fetches related images from "unsplash" to display on the Results screen.
Assumptions

1.  Dictionary Structure: Organized by word lengths: keys are lengths and values are word arrays.
2.  Input Words: May contain non-alphabetic characters.
3.  Case Insensitivity: Words are processed without case considerations.
4.  Unsplash API: Accepts any (corrected) word to return relevant images.

### Logic

1.  Data Cleaning: Non-alphabetic characters in user input are removed using regex.
2.  Auto-correction: Consonants of the input word are matched with dictionary words of the same length for auto-correction.
3.  Modularity: Functions like `isConsonant` and `cleanWord` are standalone for clarity.
4.  Dictionary: Imported as a JSON for quick lookups.
5.  Lowercase Transformation: Words are processed in lowercase for uniformity.
6.  Display Suggestions: If multiple corrected words are derived, the first is used for images, while others are displayed as suggestions.

### App Demo

### Future Enhancements

1.  Expand Dictionary: Regular updates for new words.
2.  Advanced Autocorrection: Explore better algorithms for word suggestions.
3.  Caching: Cache Unsplash API calls for efficiency.
