function inArray(array1,array2){
    let arr = [];
    array2.forEach(word => {
        array1.forEach((end,i) => {
            if (word.includes(end)) {
                array1.splice(i,1);
                arr.push(end);
            }
        })
    })
    
    return arr.sort();;
  }

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

let a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a2))
a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2));
a1 = ["tarp", "mice", "bull"]
console.log(inArray(a1, a2))