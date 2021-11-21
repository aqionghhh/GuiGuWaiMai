# 第一天：

###     src 

    |-- components------------非路由组件文件夹 
        |-- FooterGuide---------------底部组件文件夹 
            |-- FooterGuide.vue--------底部组件 vue 
    |-- pages-----------------路由组件文件夹 
        |-- Msite---------------首页组件文件夹 
            |-- Msite.vue--------首页组件 vue 
        |-- Search----------------搜索组件文件夹 
            |-- Search.vue---------搜索组件 vue 
        |-- Order--------------订单组件文件夹 
            |-- Order.vue-------订单组件 vue 
        |-- Profile--------------个人组件文件夹 
            |-- Profile.vue-------个人组件 vue 
    |-- App.vue---------------应用根组件 vue 
    |-- main.js---------------应用入口 js



# 第二天：

    各导航路由组件（静态）
    HeaderTop组件
    Msite轮播图



# 第三天：

```
ShopList组件
Login组件（静态）
重构静态页面
```

###### api接口：

```
index.js
ajax.js
```



```
ajax请求库：axios
ajax请求函数封装：axios + promise
接口请求函数封装：每个后台接口
    每个后台接口对应一个接口请求函数
```

#### 需要学会根据接口文档写接口请求函数、清楚代理服务器的工作原理(代理有分正向代理和反向代理)

##### 异步数据：

###### 封装ajax：

```
promise+axios封装ajax请求的函数
需要配置代理实现跨域ajax请求
要用到vuex来管理异步数据
完成异步显示地址、视频分类轮播和商家列表
```

###### vuex编码：

```
创建相关的模块：store/index|state|mutations|actions|getters|mutation-types
设计state:从后台获取的数据
实现actions：
	定义异步action:async/await
	流程：发ajax获取数据，commit给mutation
实现mutations：给状态赋值
实现index：创建store对象
main.js：配置store
```

###### 模板中显示数据的来源

```
data:自身的数据（内部改变）
props:外部传入的数据（外部改变）
computed:根据data/props/别的compute/state/getters
```



###### 组件异步显示数据：

```
步骤1.在mounted()通过$store.dispatch('actionName')来异步获取后台数据到state中
步骤2.mapState(['xxx'])读取state中数据到组件中
步骤3.在模板中显示xxx的数据
```



##### **注：在展示异步数据的时候要考虑界面的刷新是要在数据的更新之后，可以使用vue.$nextTick**，在界面更新之后进行操作

```
this.$nextTick()方法主要是用在数据改变，dom改变应用场景中。vue中数据和dom渲染由于是异步的，所以，要让dom结构随数据改变这样的操作都应该放进this.$nextTick()的回调函数中。
```

```
使用方法：
回调+$nextTick() 或
watch+$nextTick()
```



# 第四天：

###### 完成注册登录功能

```
动态添加类名和添加点击事件
在做点击发送验证码的时候 要用prevent阻止form表单的默认提交表单行为
给整个form表单中添加点击事件，用来进行前台表单验证（要用prevent阻止form表单的默认提交表单行为）
```

```
组件里：在methods里面有定时器，不管是在定时器里还是外，this都指向vc
```

###### 登录/注册：界面相关效果

```
切换登录方式
手机号合法检查（正则）（计算属性）
倒计时效果（循环定时器）
切换显示或隐藏密码（两个类型不同输入框，通过添加类名的方式展现和隐藏）
前台验证提示（AlertTip组件）
```

###### 警告组件

```
AlertTip组件
在Login组件中引入并进行前台表单验证
在AlertTip组件中自定义点击事件，当点击确定按钮的时候警告弹窗消失
```

###### 前后台交互相关问题

```
1.如何查看应用是否发送某个ajax请求？
	打开浏览器的network
2.发ajax请求404
	请求的路径是否正确
	代理是否生效（配置和重启）
	服务器应用是否运行
3.后台返回了数据，但页面没有显示？
	vuex中是否有
	组件是否读取
```

###### 定义接口请求函数(api/index.js)

```
用户名密码登陆、发送短信验证码、手机号验证码登陆、根据会话获取用户信息、用户登出、根据经纬度和关键字搜索商铺列表
```



# 第五天

###### 发送短信验证码

```
发送短信接口：gshop-server_final\util\sms_util.js
直接在路由组件Login中发送请求，在methods异步获取短信验证码
短信登录和密码登录中输入正确后把返回的用户数据存到vuex中并跳转到个人界面this.$router.replace("/profile");
```

```
配置完vuex之后在Profile组件中读取存入的userInfo数据，并将用户名展示在页面
```

```
异步获取用户信息api用于拿取存储在session中的用户信息并展示在页面上，防止刷新时页面中不显示用户信息。在应用一打开的时候就调用，即在App.vue中调用
```

ui库：mint-ui （基于vue的移动端组件库）

```
下载：npm install --save mint-ui   
实现按需打包
	1.下载：npm install --save-dev babel-plugin-component
	2.修改babel配置：
		"plugins": ["transform-vue-jsx",
            "transform-runtime",
            ["component", [
              {
                "libraryName": "mint-ui",
                "style": true
              }
            ]]
          ]
          
使用：
    //引入组件库（在main.js里引入时为了做成全局标签）
    import { Button } from 'mint-ui'
    import 'mint-ui/lib/style.min.css'
    //注册全局组件标签
    Vue.component(Button.name, Button)//<mt-button></mt-button>
```

###### 退出登录

```
也是需要配置vuex，把userInfo清空
给按钮绑定点击事件logout
```

###### 搭建商家整体页面

```
Shop组件 一级路由 从ShopList进入
	组件内有3个子路由和一个ShopHeader一般组件
```

