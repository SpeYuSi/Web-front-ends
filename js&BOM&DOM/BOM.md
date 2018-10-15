### Browser 对象

**Window对象**
表示浏览器中打开的窗口
属性：

window.document 只读访问dom对象
window.history 只读访问history对象
window.location 只读访问location对象
window.Navigator 只读访问Navigator对象
window.Screen 只读访问Screen对象

window.closed  返回一个bool值，表示当前窗口是否关闭
window.defaultStatus 返回或设置状态栏默认文本
window.status 设置窗口状态栏的文本
window.innerheight 显示区高度
window.innerwedth 显示区宽度
window.outerheight 窗口总高度
window.outerwedth 窗口总宽度
window.name 返回或设置窗口名
window.opener 返回父窗口的引用
window.self 返回对自身的引用
window.top 返回定级==顶级窗口的引用

方法：

alert(message) 警告框
confirm(message) 确认框,确认返回true取消返回false
prompt(text,defaultText) 提示输入框,确认返回文本,取消返回null

setTimeout(code,millisec) 延迟指定毫秒数执行代码
clearTimeout(setTimeout) 取消setTimeout
setInterval(code,millisec)  按指定毫秒数周期循环代码
clearInterval(id_of_setinterval)  取消setInterval

open(URL,name,features,replace) 打开一个新窗口，replace：true替换历史记录
close() 关闭窗口，只能关闭使用js打开的窗口
window.focus() 获得焦点
print() 打印窗口

window.moveBy(x,y) 相对当前坐标移动窗口
window.moveTo(x,y) 移动到指定坐标，不能移出屏幕
resizeBy(width,height) 调整窗口的大小(ie,ff)
resizeTo(width,height) 调整js创建的窗口大小
scrollBy(xnum,ynum) 向右、下拉动滚动条
scrollTo(xpos,ypos) 将滚动条拉到对应坐标

**Location对象**
包含有关当前 URL 的信息
属性：
location.hash 设置或返回url中 #号之后的部分
location.search 设置或返回url中？号后的部分
location.host 设置或返回主机和端口号
location.port 设置或返回端口号
location.hostname  设置或返回主机
location.href 设置或返回完整url
location.pathname 设置或返回url路径
location.protocol 设置或返回url协议

方法：
location.assign(URL) 打开新页面，会在历史记录中生成新记录
location.reload() 重载页面
location.replace(newURL) 打开新页面，在历史记录中替换当前记录


**Screen对象** 
屏幕相关信息
属性：
height 返回屏幕高度
width 返回屏幕高度
availHeight 返回屏幕高度,除windows任务栏
availWidth	返回屏幕宽度,除windows任务栏
pixelDepth 颜色分辨率
updateInterval 屏幕刷新率


**History对象**
包含用户（在浏览器窗口中）访问过的 URL
属性：
History.length  返回浏览器历史列表中的 URL 数量

方法：
back() 返回历史记录的前一个url
forward() 加载历史记录的下一个url
history.go(number|URL) 加载具体url,window.history.go(-1)加载前一个页面


**Navigator对象**
浏览器的相关信息
属性:
Navigator.appName  浏览器名
Navigator.appVersion 浏览器版本
Navigator.browserLanguage 浏览器语言
Navigator.cookieEnabled 浏览器是否启用cookie，启用返回true
Navigator.cpuClass 浏览器系统cpu等级
Navigator.onLine 浏览器是否脱机模式
Navigator.platform 浏览器运行操作系统平台
Navigator.systemLanguage 浏览器运行os的默认语言
Navigator.userAgent 返回HTTP请求的user-agent头
Navigator.userLanguage 浏览器os的自然语言设置

方法：
javaEnabled() 返回一个bool值,指示浏览器是否启用java
taintEnabled() 当前浏览器是否启用了 data tainting


**存储对象**
使用键值对保存数据
.removeItem("key") 删除指定数据
.clear() 删除所有数据
window.localStorage   没有过期时间。
window.sessionStorage  在关闭窗口或标签页之后将会删除这些数据。