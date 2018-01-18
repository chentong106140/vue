/**
 * Created by cherish on 2018/1/18.
 */

//这是一个watch的案例
let init = setTimeout(function () {
  console.log("\n\n/***************************watch.js start****************************************/\n\n");
  var log = "watch.js";
  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      /**
       * 用户输入的问题<input v-model="question">，数据自动绑定在question
       */
      question: '',
      /**
       * Vue输出属性{{answer}}
       */
      answer: '你要先提出问题，我才能给你答案！'
    },
    watch: {
      // 只要 question 发生改变，此函数就会执行，所以就会出现下面方法执行的频率特别高
      //  那么如何限制频率呢？具体查看getAnswer方法
      question: function (newQuestion) {
        this.answer = '等待输入停止……';
        this.getAnswer();
      }
    },
    methods: {
      // _.debounce 是由 lodash 提供的函数，
      // 在运行特别消耗性能的操作时，
      // 可以使用 _.debounce 来限制频率。
      // 在下面这种场景中，我们需要限制访问 yesno.wtf/api 的频率，
      // 等到用户输入完毕之后，ajax 请求才会发出。
      // 想要了解更多关于 _.debounce 函数（以及与它类似的 _.throttle）的详细信息，
      // 请访问：https://lodash.com/docs#debounce
      getAnswer: _.debounce(
        function () {
          if (this.question.indexOf('？') === -1) {
            this.answer = '问题通常需要包含一个中文问号。;-)'
            return
          }
          this.answer = '思考中……'
          var vm = this
          //axios执行get请求，方法一：
          /* axios.get('https://yesno.wtf/api').then(function (response) {
           vm.answer = _.capitalize(response.data.answer)
           }).catch(function (error) {
           vm.answer = '错误！API 无法处理。' + error
           });*/

          //axios执行get请求，方法二：
          var config = {
            //`url`是服务器链接，用来请求
            //url: '/api',
            //`baseURL`如果`url`不是绝对地址，那么将会加在其前面。
            //当axios使用相对地址时这个设置非常方便
            //在其实例中的方法
            baseURL: "https://yesno.wtf/",
            //`timeout`定义请求的时间，单位是毫秒。
            //如果请求的时间超过这个设定时间，请求将会停止。
            timeout: 1000,
            //`method`是发起请求时的请求方法
            method: 'get',
            //`transformRequest`允许请求的数据在传到服务器之前进行转化。
            //这个只适用于`PUT`,`GET`,`PATCH`方法。
            //数组中的最后一个函数必须返回一个字符串或者一个`ArrayBuffer`,或者`Stream`,`Buffer`实例,`ArrayBuffer`,`FormData`
            transformRequest: [function (data) {
              console.log(log, "transformRequest被执行！", data);
              return data;
            }],
            //`transformResponse`允许返回的数据传入then/catch之前进行处理
            transformResponse: [function (data) {
              console.log(log, "transformResponse被执行！", data);
              return data;
            }],
            //`headers`是自定义的要被发送的头信息
            headers: {},
            //`params`是请求连接中的请求参数，必须是一个纯对象，或者URLSearchParams对象
            params: {question: this.question},
            //`responsetype`表明服务器返回的数据类型，这些类型的设置应该是
            //'arraybuffer','blob','document','json','text',stream'
            responsetype: 'json',
            //`onUploadProgress`允许处理上传过程的事件
            onUploadProgress: function (progressEvent) {
              //本地过程事件发生时想做的事
              console.log(log, "onUploadProgress方法被执行！")
            },
            //`onDownloadProgress`允许处理下载过程的事件
            onDownloadProgress: function (progressEvent) {
              //下载过程中想做的事
              console.log(log, "onDownloadProgress方法被执行！")
            }
          };


          var instance = axios.get('/api', config).then(function (response) {
            console.log(log, response);
            if (response.status === 200) {
              var answer = _.capitalize(JSON.parse(response.data).answer)
              vm.answer = answer;
              console.log(log, "响应成功！", response.data, answer);
            } else {
              console.log(log, "响应失败！");
            }
          }).catch(function (error) {
            console.log(log, "请求失败", error);
          });

          console.log(log, instance)//Promise
        },
        // 这是用户停止输入操作后所等待的毫秒数。
        // （译者注：500毫秒之内，用户继续输入，则重新计时）
        1000
      )
    }
  });
  console.log("\n\n/***************************watch.js end****************************************/\n\n");
}, 4);

export default init;
