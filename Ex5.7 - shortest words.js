function findShortestWord(str) {
    let words = str.split(' ');
    let shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
  }
  console.log(findShortestWord("The quick brown foxed jumped over thee lazy it"));