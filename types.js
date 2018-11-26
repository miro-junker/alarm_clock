function Time(initData) {
    switch (typeof initData) {
        case 'number':
            this.timeStr = minutes_to_timeStr(initData);
            this.minuteCtr = initData;
            break;
        case 'string':
            this.timeStr = initData;
            this.minuteCtr = Minutes(initData);
            break;
        default:
            // now
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            this.timeStr = `${String(hours)}:${String(minutes)}`;
            this.minuteCtr = Minutes(this.timeStr);
            this.day = date.getDate();
            this.month = date.getMonth() + 1;
            this.timeDateStr = `${String(this.day)}.${String(this.month)}. ${this.timeStr}`;
    }
};
