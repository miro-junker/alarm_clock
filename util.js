function Minutes(timeStr) {
    let components = timeStr.split(':');
    return (Number(components[0]) * 60) + (Number(components[1]));
}

function daylight_duration(start, end) {
    return Minutes(end) - Minutes(start);
}

function calculate_wakeUpTime() {
    return;
}

function getAwakeDuration(sleep_duration) {
    day_length = 24 * 60;
    return day_length - Minutes(sleep_duration);
}

function minutes_to_timeStr(minuteCtr) {
    let hours = String(minuteCtr / 60);
    let minutesCtr = String(minuteCtr % 60);
    return hours + ":" + minuteCtr;
}

function timeDiff(op1, op2) {
    return op1.minuteCtr - op2.minuteCtr;
}
