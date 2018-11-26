let refresh = 10; // every x seconds

function wakeUp() {
    $('.sound1').trigger('play');
};

setInterval( () => {
    let now = new Time();

    $('.time').text(now.timeDateStr);

    let sun_start = new Time(sun[now.month][now.day].start);
    let sun_end = new Time(sun[now.month][now.day].end);
    console.log('Vychod slunce: ' + sun_start.timeStr + ', zapad slunce: ' + sun_end.timeStr);
    let daylight_length = timeDiff(sun_end, sun_start);

    let sleep_length = Minutes(settings.sleep_duration);
    let awake_length = getAwakeDuration(settings.sleep_duration)

    let wakeUp_time = sun_start;
    if(awake_length < daylight_length) {
        console.log('Jit spat se zapadem slunce');
        wakeUp_time = new Time(sun_end.minuteCtr - awake_length);
    }
    else {
        console.log('Vstavat s vychodem slunce')
    }

    console.log('Idealni cas vstavani: ' + wakeUp_time.timeStr);

    if(settings.force_wakeup_time) {
        wakeUp_time = settings.force_wakeup_time;
    }

    console.log('Je: ' + now.timeStr + ' a mas vstavat v: ' + wakeUp_time);

    if(now.timeStr === wakeUp_time.timeStr) {
        console.log('Cas vstavat!');
        wakeUp();
    }


}, refresh*1000 );
