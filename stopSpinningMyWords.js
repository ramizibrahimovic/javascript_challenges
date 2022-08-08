function spinWords(string){
    let arr = [];
    for (let word of string.split(" ")) {
        word.length >= 5 ? arr.push(word.split("").reverse().join("")) : arr.push(word);;
    }
    return arr.join(" ");
}

//const age_group = age < 18 ? "Child" : "Adult";

console.log(spinWords("hi hello there bra"))