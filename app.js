let refresh = 10; // every x seconds

function wakeUp() {
    $('.sound1').trigger('play');
};

setInterval( () => {
    let now = timeFactory();
    console.log(now);

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let timeStr = `${String(hours)}:${String(minutes)}`;
    let timeDateStr = `${String(day)}.${String(month)}. ${timeStr}`;

    $('.time').text(timeDateStr);

    let sun_start = sun[month][day].start;
    let sun_end = sun[month][day].end;

    console.log(sun_start + ' zapad' + sun_end);

    timeStr_to_minutes(settings.sleep_duration);


    let wakeUp_time = sun_start;
    if(awake_duration(settings.sleep_duration) < daylight_duration) {
        console.log("jit spat se zapadem slunce");
        wakeUp_time = timeStr_to_minutes(sun_end) - awake_duration(settings.sleep_duration);
    }
    else {
        console.log("vstavat s vychodem slunce")
    }

    console.log("budik v: " + wakeUp_time);


    

    wakeUp_time = '22:27';

    console.log('je: ' + timeStr + " a mas vstavat v:" + wakeUp_time);
    if(timeStr === wakeUp_time) {
        console.log('cas vstavat!!');
        wakeUp();
    }


}, refresh*1000 );
