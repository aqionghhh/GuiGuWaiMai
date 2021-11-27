# 第一天：

###     src 

    |-- components------------非路由组件文件夹 
    	|-- AlertTip---------------警告弹窗组件
            |-- AlertTip.vue--------警告弹窗组件 vue 
    	|-- Food---------------商品详情页中的每个食物组件文件夹 
            |-- Food.vue--------商品详情页中的每个食物组件 vue 
    	|-- CartControl---------------商家详情页控制商品加减组件文件夹 
            |-- CartControl.vue--------商家详情页控制商品加减组件 vue 
        |-- FooterGuide---------------底部组件文件夹 
            |-- FooterGuide.vue--------底部组件 vue 
    	|-- HeaderTop---------------一级路由的顶部组件文件夹 
            |-- HeaderTop.vue--------一级路由的顶部组件 vue 
    	|-- ShopCart---------------商家详情页的底部购物车组件文件夹 
            |-- ShopCart.vue--------商家详情页的底部购物车组件 vue 
        |-- ShopHeader---------------商家详情页的头部组件文件夹 
            |-- ShopHeader.vue--------商家详情页的头部组件 vue 
    	|-- ShopList---------------所有的商家列表组件文件夹 
            |-- ShopList.vue--------所有的商家列表组件 vue 
    	|-- Star---------------用户评价的星星组件文件夹 
            |-- Star.vue--------用户评价的星星组件 vue 
    |-- pages-----------------路由组件文件夹 
        |-- Login---------------登录组件文件夹 
            |-- Login.vue--------登录组件 vue 
        |-- Shop---------------整个购物组件文件夹 
            |-- ShopGoods---------------购物组件中的点餐组件文件夹 
            	|-- ShopGoods.vue--------购物组件中的点餐组件 vue 
            |-- ShopInfo---------------购物组件中的商家信息组件文件夹 
            	|-- ShopInfo.vue--------购物组件中的商家信息组件 vue 
            |-- ShopRatings---------------购物组件中的商品评价组件文件夹 
            	|-- ShopRatings.vue--------购物组件中的商品评价组件 vue 
            |-- Shop.vue--------整个购物组件 vue 
        |-- Msite---------------首页组件文件夹 
            |-- Msite.vue--------首页组件 vue 
        |-- Search----------------搜索组件文件夹 
            |-- Search.vue---------搜索组件 vue 
        |-- Order--------------订单组件文件夹 
            |-- Order.vue-------订单组件 vue 
        |-- Profile--------------个人组件文件夹 
            |-- Profile.vue-------个人组件 vue 
    |-- api---------------api文件夹
    |-- common---------------静态资源文件夹
    |-- filters---------------时间格式化过滤器
    |-- mock---------------模拟请求文件夹
    |-- router---------------路由配置文件夹
    |-- store---------------vuex配置文件夹
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

###### 使用mockjs模块模拟数据接口

```
要了解mockjs的机制
要在mian.js中引入mockServer.js
ajax请求mockjs模拟的接口（在mockServer.js文件中写mock数据接口）
要会设计json数据的结构（类型和名称）
不需要设置代理
```

###### ShopHeader组件

```
1.异步显示数据效果的编码流程
	ajax
		ajax请求函数
		接口请求函数
	vuex
		state
		mutation-types
		actions
		mutations
	组件
		dispatch():异步获取后台数据到vuex的state
		mapState():从vuex的state中读取对应的数据
2.
```

###### 注意：

```
undefined.xxx  会报错 Cannot read property 'xxx' of undefined
null.xxx       会报错 Cannot read property 'xxx' of null
xxx.undefined  不会报错
使用vue的chrome插件查看vue和vuex中的state和组件中的数据
```

# 第六天

###### ShopGoods组件

```
cartControl组件 购物车增减
ShopCart组件 购物车
Food组件 食物显示
```

```
滑动效果分析：
前提：先要实现左右两个列表的滑动
	需求：
		显示当前分类
		当滑动右侧列表时，更新当前分类
		点击某个分类想，右侧列表滑动到对应位置
		
	需要设置类名current 标识当前分类
	设计一个计算属性：currentIndex，计算得到当前分类的下标，当它与遍历的index		相同时，显示类名current
	根据哪些数据计算：
		scrollY: 右侧滑动的Y轴坐标（滑动过程实时变化）
		tops: 所有右侧分类li的top组成的数组（列表第一次显示后就不再变化）
	
	1.在滑动过程中，实时收集scrollY
	2.在列表第一次显示后，收集tops
	3.实现currentIndex的计算逻辑
```

![image-20211122164104861](C:\Users\26671\AppData\Roaming\Typora\typora-user-images\image-20211122164104861.png)



# 第七天

底部购物车组件ShopCart

需要使用vuex管理购物项数据：cartFoods

![image-20211125220640041](C:\Users\26671\AppData\Roaming\Typora\typora-user-images\image-20211125220640041.png)



```
模板里面要显示东西有三个来源：props、data、computed
```



# 第八天

###### 总结：点餐界面

```
基本滑动：
	使用better-scroll插件
	创建BScroll对象的时机（在列表显示之后）（有两种方法
		1.watch+$nextTick() 
		2.callback+$nextTick()  
滑动右侧列表，左侧同步更新
	better-scroll仅用了原生dom事件，使用的是自定义事件
	绑定监听：scroll/scrollEnd
	滚动监听的类型：probeType
	
CartControl组件
	问题：更新状态数据，对应的界面不变化
	原因：一般方法给一个已有绑定的对象中添加一个新的属性，这个属性没有数据绑定
	解决：
		Vue.set(obj,'xxx',value) 才有数据绑定
	  或this.$set(obj,'xxx',value) 才有数据绑定
```

```
父子组件问题：	
	子组件调用都组件的方法，通过props将方法传递给子组件
	父组件调用子组件的方法：通过ref找到子组件标签对象
```

###### 购物车列表的滑动

```
在ShopCart组件中引入better-scroll
	同样是在列表刷新后调用，即在listShow方法中创建对象
```

###### 清空购物车

```
引入mint-ui
在mutations中配置，移除购物车中的所有购物项
```

##### 如何判断是同步请求还是异步请求？根据是否访问服务器吗？

###### ShopRatings组件

```
需要做列表过滤显示
	在模板中循环一个自定义数组，自定义数组中存放着三种不同需求的数组，根据数组不同的返回值返回不同的内容
```

###### ShopInfo组件

```
有垂直滑动和水平滑动
有几个地方的滑动就new几个BCsroll
水平滑动需要有配置项：scrollX:true

要考虑创建BScroll对象和数据是否存在的时机，必须是数据存在，才能创建BScroll对象，进行滑动，数据不存在无法滑动
```

# 第九天

```
Search组件
	<router-link></router-link>默认生成<a>标签，tag="li"会让<router-link>生成<li>标签
	需要设置一个额外的标识变量（在data里设置），如果搜索有值就显示商家数组，如果没值就显示提示文本
```

```
涉及到数据对vuex进行的操作顺序：state、mutation-types、mutations、actions
```

###### 性能优化

```
缓存路由组件对象（在浏览器端的内存里，把组件对象缓存起来）
	跳转路由的时候不销毁之前的路由
	<keep-alive>
    	<router-view /> 
    </keep-alive>
```

```
路由组件懒加载（需要的时候才去后台请求路由组件的代码）（一般一级路由才做）（小的路由组件不需要（浪费请求））
写在router/index.js里
	普通模式：import Msite from '../pages/Msite/Msite';
	懒加载模式：const Msite = () =>import('../pages/Msite/Msite')
		返回的是路由组件的函数，即只有执行此函数才会加载路由组件，函数在第一次请求对应的路由路径的时候才会执行
	使用懒加载路由，会在打包的时候分成多个文件
```

```
图片懒加载：vue-lazyload
	npm install --save vue-lazyload
	在main.js中引入
        import VueLazyload from 'vue-lazyload';
        import loading from './common/imgs/loading.gif';
        Vue.use(VueLazyload, {//内部自定义了一个指令lazy
        loading//引入的是转圈圈的加载中图片
        })
    使用：在图片中插入属性 v-lazy="img.src"
    	eg:<img v-lazy="图片名">
```

###### 路由跳转方式

```
push：默认，类似压栈操作
replace：直接在需要的<router-link>标签中添加属性replace 可以直接跳回
```

###### 自定义过滤器

```
npm install --save moment
在filter文件夹中创建index.js
然后引入vue和momemt

//自定义过滤器
Vue.filter('date-format',function(value){
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})

不需要向外暴露，在main.js中导入
//加载过滤器
import './filters'

在需要用到的组件中使用
```

