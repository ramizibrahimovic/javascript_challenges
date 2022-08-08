function permutations(string) {
    let arr = [string];
    var i = 0;
    while (i < 30) {
        var newWord = string.split('').sort(() => 0.5 - Math.random()).join("");
        if (!arr.includes(newWord)) {
            arr.push(newWord);
        }
        i++;
    }
    return arr;
}

console.log(permutations("aabb"))
