function solution(list){
    // TODO: complete solution
    let str = "";
    let arr = []
    list.forEach((element,index) => {
        console.log(element,index);
        //check if next element is 1 higher, if not push to the string
        if (element != (list[index + 1] - 1)) {
            console.log("not row: " + element);
            str += element + ", ";
        } elsif //check if next element is 1 higher and next next is 2 higher, if nextnext not true push both to str

    })
    return str;
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15]))