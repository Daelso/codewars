const test = "The quick brown fox jumps over the lazy dog."

function reverseWords(str) {

    return str.split(' ').map(word=> word.split('').reverse().join('')).join(' ')

  }

reverseWords(test)