function domainName(url){
    let str = url.replace("http://","").replace("https://","").replace("www.","");
    if (str.includes("/")) {
        str = str.substring(0, str.indexOf("/"))
    } 
    return str.substring(0, str.indexOf("."));
}

console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com"))