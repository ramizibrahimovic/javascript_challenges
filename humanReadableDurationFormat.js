function formatDuration(seconds) {
    if (seconds == 0) {return "now"}
    let converter = [1, 60, 3600, 86400, 31556952];
    let timeArr = [];
    for (let i = converter.length-1; i >= 0; i--) {
        if (seconds >= converter[i]) {
            var time = Math.floor(seconds / converter[i]);
            seconds = seconds - (time * converter[i]);
            timeArr.unshift(time);
        }
    }
    timeArr.forEach((element, index) => {
        if (element == 1) {
            timeArr[index] = element + units[index].slice(0,-1)
        } else {
            timeArr[index] = element + units[index]
        }
    });
    if (timeArr.length > 1) {
        timeArr.splice(1,0,"and").reverse();
        return timeArr.reverse().join(", ").replace(", and,"," and ")
    } else {
        return timeArr[0];
    }
};

function formatDuration(seconds) {
    if (seconds == 0) {return "now"}
    let y = Math.floor(seconds /31556952);
    let d = Math.floor(seconds %31556952 /86400);
    let h = Math.floor(seconds %31556952 %86400 / 3600);
    let m = Math.floor(seconds %31556952 %86400 % 3600 / 60);
    let s = Math.floor(seconds %31556952 %86400 % 3600 % 60);
    let units = [" seconds"," minutes", " hours"," days"," years"].reverse();
    let time = [y,d,h,m,s];
    time.forEach((element, index) => {
        if (element == 1) {
            time[index] = element + units[index].slice(0,-1)
        } else {
            time[index] = element + units[index]
        }
    });
    let newtime = time.filter(elem => elem[0] > 0);
    if (newtime.length > 1) {
        newtime.splice(-1,0,"and");
        return newtime.join(", ").replace(", and,", " and");
    } else {
        return newtime[0];
    }
}

console.log(formatDuration(34556952));
console.log(formatDuration(3662));
console.log(formatDuration(15));
console.log(formatDuration(0));
console.log(formatDuration(61));