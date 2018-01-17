#   [模板方法](https://vuefe.cn/v2/guide/syntax.html)


#interpolations.js  文本插入值
###  js  methods:{自定义方法:function(){}}
>   在vue中注册自定义方法
```bash
           methods:{
             reverseMessage:function () {
               data.msg1 ="我发生改变了！";
               data.msg2 = "我也发生改变了";
             }
           }
```


###  html  v-on:click="自定义方法"
>   给元素赋予click事件，并且执行在vue中注册的方法reverseMessage
```html
<button v-on:click="reverseMessage">点我让数据发生改变</button>
```


###  html  v-once
>   当vue的属性msg2发生改变之后，禁止DOM上的数据msg2发生改变
```html
 <span v-once>{{msg2}}</span><br/>
```



#rowhtml.js  插入原始的Html值
>   如果我们需要动态的给DOM添加html代码，但是又不想他添加到DOM中，此时就会用到v-html来让页面显示html代码

###   html  v-html='vue属性名称'
>   插入需要插入html源代码的元素中，写法例如：
```html
<span v-html="rowHtml"></span>
```
>   切记不能写成
```html
<span v-html="{{rowHtml}}"></span>
```
>   双括号不能用在v-html中




#vBind.js   插入元素属性值
>   通过v-bind:属性名称，进行动态的给元素添加该属性名称的属性值

>   注意不能使用js语句，流控制语句也不能用，只能使用表达还是

>   如下，都是错误的
```bash
  {{ var a = 1}}    //错误写法
  {{ if(ok){ return msg }}}     //错误写法
```

###   html  v-bind:id='vue属性名称'，写法例如
```html
 <p v-bind:id="dynamicId" ></p>
```


#jsEl.js  插入js表达式
>   通过在{{}}双括号中加上js表达式进行插入值

>   测试代码如下：
```bash
  <p>{{'数值计算'+(number+1)}}</p>
  <p>{{'三目运算符'+(ok == 'yes' ? ok : 'no')}}</p>
  <p>{{'字符串反转：'+ msg.split('').reverse().join('') }}</p>
  <div v-bind:id="'list-'+id"></div>
  <p v-if="bl">如果bl为真，将显示p标签</p>
```




#zhiling.js 通过指令与属性绑定在一起，v-bing,v-on,

>   参数，v-bind:href="url"  v-bind是指令 href是参数   url是表达式也是vue的属性

>   案例如下：
```bash
  <!--v-bind是指令，href是参数，-->
  <!--这里的href是参数，告知v-bind指令，将元素href属性 与表达式url 的值绑定在一起-->
  <a v-bind:href="url" v-on:click.prevent="doSomething">百度链接</a>
```

>   修饰符 v-on:click.prevent  .prevent 修饰符告诉 v-on 指令，在触发事件后调用 event.preventDefault()

>   案例如下：
```bash
<a  v-on:click.prevent="doSomething">百度链接</a>
```



#shorthands.js  将常用的指令属性可以进行简写
>   例如，v-bind:href  简写为 :href   v-on:click  简写为 @click

>   案例如下：
```bash
    <a v-bind:href="url"  v-on:click.prevent="doSomething">完整语法</a><br/>
    <a :href="url" @click.prevent="doSomething">简写语法</a>
```
















#   构建步骤
```bash
   全局安装vue cnpm install -g vue   如果全局有集安装过vue就不要再安装

   本地安装vue cnpm install vue

   安装 vue-cli  cnpm install --global vue-cli  如果全局已经安装过vue-cli就不要再安装

   使用 "webpack" 模板创建一个新项目  vue init webpack  /如果没有创建项目目录 vue init webpack my-project

   安装依赖  cnpm install

   运行开发环境  npm run dev 登陆  http://localhost:8080

```

#   启动命令
```bash
>   开发模式，建立8080端口服务，启动命令：cnpm run dev

>   开发模式，打包文件在dist目录，启动命令：cnpm run build_dev

>   生产模式，打包文件在dist目录，启动命令：cnpm run build
```

# 启动步骤
```bash
//安装
cnpm install

//运行开发模式
cnpm run dev
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
