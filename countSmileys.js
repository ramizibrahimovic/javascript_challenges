function countSmileys(arr) {
    let counter = 0;
    for (let smiley of arr) {
        if (smiley.match(/[;:][-~]?[)D]/)) {
            counter++
        }
    }
    return counter;
  }

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))

console.log(countSmileys([':D',':~)',';~D',':)','~D:']));

console.log(countSmileys([';D', ':-(', ':-)', ';~)']));  