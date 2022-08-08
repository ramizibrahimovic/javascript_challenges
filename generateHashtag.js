function generateHashtag(str) {
    if (!/\w/.test(str)) return false;
    let arr = str.replace(/  +/g, " ").split(" ").map( word => word[0].toUpperCase() + word.slice(1)).join("");
    if (arr.length > 150) return false;
    return "#" + arr;
}

console.log(generateHashtag("k"));
console.log(generateHashtag("hello world"));
console.log(generateHashtag("h".repeat(140)));
console.log(generateHashtag(("code" + " ".repeat(8) + "wars")))