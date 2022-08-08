function rgb(r, g, b){
    let hex = [];
    for (let arg of arguments) {
        if (arg <= 0 ) {
            hex.push("00")
        } else if (arg >= 255) {
            hex.push("FF")
        } else if (arg > 0 && arg < 16) {
            hex.push("0" + Math.abs(arg).toString(16).toUpperCase())
        } else {
        hex.push(Math.abs(arg).toString(16).toUpperCase())
        }
    }
    return hex.join("");
  }
  
console.log(rgb(173,255,47));
console.log(rgb(0,0,0))
console.log(rgb(0,0,300))
console.log(rgb(1,119,221))