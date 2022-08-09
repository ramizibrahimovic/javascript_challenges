var findMissing = function (list) {  
    let arr = [];
    if (list[0] > 0) {
        for (let i = 0; i < list.length;i++) {
            arr.push(list[i] - list[i+1])
        }
        let arr2 = [...arr]
        let odd = arr2.sort((a,b) => a-b)[0];
        let j;
        for (let i = 0; i < arr.length;i++) {
            if (arr[i] === odd) {
                j = i;
                break;
            };
        }
        console.log((list[j]-list[j+1])/-2)
        return (list[j]+list[j+1])/2;
    } else {
        for (let i = 0; i < list.length;i++) {
            arr.push(list[i] - list[i+1])
        }
        
        let arr2 = [...arr]
        
        arr2.pop();
        let odd = arr2.sort((a,b) => a-b)[arr2.length-1];
        
        let j;
        for (let i = 0; i < arr.length;i++) {
            
            if (arr[i] === odd) {
                j = i;
                break;
            };
        }
        
        return Math.floor((list[j]+list[j+1])/2);
    }
}

console.log(findMissing([ 5, 2, -1, -7, -10, -13, -16, -19, -22, -25, -28 ]));//diff -3

console.log(findMissing([1, 3, 5, 9, 11]));//7 diff +2
console.log(findMissing([1, 2, 3, 4, 5, 6, 8]));//7 diff +1
