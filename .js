function startTime() {
    var today = new Date();
    var h = today.getUTCHours() + 3; // Add 3 to UTC hours to get EAT hours
    var m = today.getUTCMinutes();
    var s = today.getUTCSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.hour-hand').style.transform = 'rotate(' + (h * 30 + m / 2) + 'deg)';
    document.querySelector('.minute-hand').style.transform = 'rotate(' + (m * 6) + 'deg)';
    document.querySelector('.second-hand').style.transform = 'rotate(' + (s * 6) + 'deg)';
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = '0' + i};
    return i;
}
