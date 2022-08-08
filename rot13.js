function rot13(message) {
    let arr = [];
    message.split("").forEach(letter => {
        if (/[A-Z]/.test(letter)) {
            if ((letter.charCodeAt() + 13) <= 90) {
                arr.push(String.fromCharCode(letter.charCodeAt() + 13));
            } else {
                arr.push(String.fromCharCode(((letter.charCodeAt() + 13) % 90 + 64)));
            }
        } else if (/[a-z]/.test(letter)) {
            if ((letter.charCodeAt() + 13) <= 122) {
                arr.push(String.fromCharCode(letter.charCodeAt() + 13))
            } else {
                arr.push(String.fromCharCode(((letter.charCodeAt() + 13) % 90 + 64)));
            }
        } else {
            arr.push(letter);
        }
    });
    return arr.join("");
}

  console.log(rot13("F!"));