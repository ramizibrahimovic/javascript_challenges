function toRoman(num) {
    var romanNumerals = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
      };
    let rom = "";
    console.log("first","second","third")
    for (let key in romanNumerals) {
        console.log(romanNumerals[key]); 
    }
    //num.toString().length;
}

function fromRoman(string) {
}

console.log(toRoman(5123));