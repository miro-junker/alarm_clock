function time() {
    let timeStr, minuteCtr;
};


let timeFactory = (initData) => {
    let timeObj = new time();

    switch (typeof initData) {
        case 'number':
            timeObj.timeStr = minutes_to_timeStr(initData);
            timeObj.minuteCtr = initData;
            break;
        case 'string':
            timeObj.timeStr = initData;
            timeObj.minuteCtr = timeStr_to_minutes(initData);
            break;
        default:
            // now
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            timeObj.timeStr = `${String(hours)}:${String(minutes)}`;
            timeObj.minuteCtr = timeStr_to_minutes(timeObj.timeStr);
    }
    
    return timeObj;
};
