 let a = ['ace', 'two', 'three', 'four', 'five', 'six','seven']
 let b = ['ace', 'two', 'three', 'four', 'five', 'six','seven']

//check if arrays equal
function arrayEquals(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}
console.log(arrayEquals(a,b))

//create array with n
let arr = [...Array(6).keys()];
console.log(arr)

//faro shuffle n = 6
// first n-1,n-2,n-3
// dann ,n/2-2,n/2-3
//5,2,4,1,3,0