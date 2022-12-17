/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
var app = new Vue({
    el: '#app',
    data: {
        city: '',
        weatherList: [],//天气集合
        isFalse: false,
    },
    methods: {
        //天气查询
        searchWeather: function () {
            //由于是回调函数，this已经改变，所以要保存this
            var that = this;
            axios.get(`https://www.mxnzp.com/api/weather/current/` + this.city + `市?app_id=vwfodejcgrqktnrj&app_secret=dUFKOGZRa0lvdUJYTTlWb0ZaT1RQUT09`).then(function (response) {
                console.log(response);
                console.log(response.data.data);

                that.weatherList = response.data.data;
                if (response.data.code) {
                    that.isFalse = true;
                } else {
                    alert('未查询到该城市~');
                }
            }, function (err) {

            })
        },
        //形参是城市
        change: function (city) {
            this.city = city;//此时的this.city就是点击对应的城市
            this.searchWeather();//请求到的天气也是对应城市的天气
        }
    }
})