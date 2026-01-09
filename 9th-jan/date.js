const now = new Date();

for (let i = 0; i < 1000000000; i++) {
    console.log(now.getFullYear());
    console.log(now.getMonth());
    console.log(now.getDate());
    console.log(now.getDay());
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());
    console.log(now.getMilliseconds());
    if (i === 99999999) break;
}
