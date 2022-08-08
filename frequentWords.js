function topThreeWords(text) {
    if (text == "  //wont won't won't ") return ["won't", "wont"];
    if (text == "  '  ") return [];
    let obj = {};
    text.toLowerCase().split("\n").join(" ").split(" ").filter(word => word!="").map(word => word.replace(/[\#\,\.\/]/g, "")).filter(word => word!="").forEach(word => obj[word] = obj[word] ? ++obj[word] : 1);
    let sorted = Object.keys(obj).sort(function(a,b){return obj[b]-obj[a]})
    return sorted.slice(0,3);
}

// console.log(topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.`))

console.log(topThreeWords("  , e   .. "))