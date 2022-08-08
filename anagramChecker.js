function anagrams(word, words) {
    return words.filter( elem => elem.split("").sort().join("") == word.split("").sort().join(""))
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

    // let agrams = [];
    // for (let worrd of words) {
    //     if (arrayEquals(word.split("").sort(), worrd.split("").sort())) {
    //         agrams.push(worrd);
    //     }
    // }
    // function arrayEquals(a, b) {
    //     return Array.isArray(a) &&
    //         Array.isArray(b) &&
    //         a.length === b.length &&
    //         a.every((val, index) => val === b[index]);
    // }
    // return agrams;