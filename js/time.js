Vue.component('date-time', {
    template:
        '<div class="date-info" :style="styleobj">' +
            '<div class= "date-info__left" >{{ time }}</div >' +
            '<div class="date-info__right">' +
                '<div>{{ date }}</div>' +
                '<div>{{ day }}</div>' +
            '</div>' +
        '</div>',
    props: {
        styleobj: {
            required: false,
            type: Object
        }
    },
    data() {
        return {
            time: '',
            date: '',
            day: '',
            timeInterval: null
        }
    },
    created() {
        const momentNow = moment();
        this.date = momentNow.format('YYYY-MM-DD');
        const dayNameMapping = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        console.log("dayNameMapping index:", momentNow.format('e'));
        this.day = dayNameMapping[momentNow.format('e')];
        this.updateTime();
    },
    methods: {
        updateTime() {
            const _this = this;
            this.timeInterval = setInterval(function () {
                _this.time = moment().format('HH:mm:ss');
            }, 1000);
        }
    }
})
