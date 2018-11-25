function timeStr_to_minutes(timeStr) {
    let components = timeStr.split(':');
    return (Number(components[0]) * 60) + (Number(components[1]));
}

function daylight_duration(start, end) {
    return timeStr_to_minutes(end) - timeStr_to_minutes(start);
}

function calculate_wakeUpTime() {
    return;
}

function awake_duration(sleep_duration) {
    day_length = 24 * 60;
    return day_length - timeStr_to_minutes(sleep_duration);
}

function minutes_to_timeStr(minuteCtr) {
    let hours = String(minuteCtr / 60);
    let minutesCtr = String(minuteCtr % 60);
    return hours + ":" + minuteCtr;
}
