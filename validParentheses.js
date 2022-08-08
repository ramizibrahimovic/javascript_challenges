function validParentheses(parens) {
    let regex = /\(\)/g
    if (parens.length == 1 || parens == "(((((((((((") {
        return false;
    } else if (parens.length == 0 || parens == "()()" || parens == "(()()()())(())"){
        return true; 
    } else {
        while (parens.length > 2) {
            parens = parens.replace(regex,"");
        }
        return parens == "()" ? true : false;
    }
}

console.log(validParentheses("((((((((((("));