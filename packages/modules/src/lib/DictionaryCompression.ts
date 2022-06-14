// https://medium.com/@Rezmodeus/dictionary-compression-in-javascript-61b3de30109e
// https://github.com/Rezmodeus/Mindre/blob/master/Mindre.js
export function getDecompressed(compressedWords: string[]): string[] {
    const reg = /\d+/;
    let prevWord = '';
    return compressedWords.map(word => {
        const result = word.match(reg);
        let newWord = '';
        if (result == null) {
            newWord = prevWord + word;
        } else {
            newWord = prevWord.substr(0, parseInt(result[0])) + word.substr(result[0].length);
        }
        prevWord = newWord;
        return newWord
    });
}

export function getCompressed(words: string[]): string[] {
    let prevWord = '';
    return words.map(word => {
        let i = 0;
        while (i < prevWord.length && i < word.length && prevWord[i] == word[i]) {
            i++;
        }
        const repeatStr = word.substr(0, i) == prevWord && i > 0 ? '' : i;
        prevWord = word;
        return repeatStr + word.substr(i);
    });
}