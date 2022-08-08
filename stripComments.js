function solution(input, markers) {
    let arr = input.split("\n");
    for (let marker of markers) {
        arr = arr.map( line => new RegExp("\\" + marker).test(line) ? line.slice(0, line.search(new RegExp("\\" + marker))).trim() : line);
    }
    return arr.join("\n");;
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
console.log(solution("a #b\nc\nd $e f g",[ '#', '$' ]))