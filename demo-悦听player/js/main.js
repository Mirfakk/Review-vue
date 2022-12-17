/*
  1:歌曲搜索接口
    请求地址:https://autumnfish.cn/search
    请求方法:get
    请求参数:keywords(查询关键字)
    响应内容:歌曲搜索结果

  2:歌曲url获取接口
    请求地址:https://autumnfish.cn/song/url
    请求方法:get
    请求参数:id(歌曲id)
    响应内容:歌曲url地址
  3.歌曲详情获取
    请求地址:https://autumnfish.cn/song/detail
    请求方法:get
    请求参数:ids(歌曲id)
    响应内容:歌曲详情(包括封面信息)
  4.热门评论获取
    请求地址:https://autumnfish.cn/comment/hot?type=0
    请求方法:get
    请求参数:id(歌曲id,地址中的type固定为0)
    响应内容:歌曲的热门评论
  5.mv地址获取
    请求地址:https://autumnfish.cn/mv/url
    请求方法:get
    请求参数:id(mvid,为0表示没有mv)
    响应内容:mv的地址
*/

var app = new Vue({
  el: '#player',
  data: {
    query: '',//查询的信息
    musicList: [],//以列表的方式渲染，用数组接收

  },
  methods: {
    searchMusic: function () {
      var that = this;
      axios.get(`http://music.cyrilstudio.top/search?keywords=` + this.query + `&limit=30`).then(function (response) {
        that.musicList = response.data.result.songs;//这个层级传入的是对象
        console.log(response.data.result.songs);
      }, function (err) { })
    },
    onSearch: function () {
      this.searchMusic();
    }
  }
})