### Javascript对象

**Array对象**
- arr.concat() 连接数组并返回结果不改变原数组
- arr.join("") 将数组元素放入字符串,使用指定分隔符分隔,返回字符串
- arr.pop() 删除并返回数组的最后一个元素
- arr.push() 向数组末尾添加元素并返回新长度
- arr.reverse() 颠倒原数组
- arr.shift() 删除并返回数组的第一个元素
- arr.unshift() 向数组开头添加元素，返回新长度
- arr.slice(start,end) 返回截取后的新数组
- arr.splice(index,howmany,item1,.....,itemX) 删除原数组的指定数量元素，并可以进行替换
- arr.sort(sortfun) 默认按字母排序,添加参数后对数字排序sortfun(a,b) return a-b 小到大

**Boolean对象**


**Date对象**

- var date = new Date()
- date.Date() 返回当日日期    
- date.getDate() 返回几日                      date.setDate() 设置几日
- date.getDay() 返回周几（0~6）					
- date.getMonth() 返回月（0~11）				date.setMonth() 设置月份
- date.fullYear() 返回年						date.setFullYear() 设置年份
- date.getHours() 返回小时（0~23）				date.setHours() 设置小时
- date.getMinutes() 返回分钟					date.setMinutes() 设置分钟
- date.getSeconds() 返回秒						date.setSeconds() 设置秒
- date.getMilliseconds() 返回毫秒				date.setMilliseconds() 设置毫秒
- date.getTime() 返回距离1970年的毫秒数			date.setTime() 以毫秒设置Date对象



**String对象**
- s.chatAt() 返回指定位置字符
- s.concat() 返回连接后字符串
- s.indexOf(str,startindex) 大小写敏感检索字符串第一次出现位置，没有返回-1
- s.lastIndexOf(str,startindex) 大小写敏感检索字符串最后出现位置，没有返回-1
- s.match(regexp) 返回一个或多个匹配项
- s.replace(regexp,replacement) 字符替换，replacement规定了替换文本或生成替换文本的函数
- s.search(regexp) 返回匹配正则的第一个子串的startindex
- s.slice(start,end) 返回一个新的截取后的字符串
- s.split(separator,howmany) 返回一个由一个字符串分割成的字符串数组与Array.join()相反
- s.substr(start,length) 返回截取的字符串
- s.substring(start,stop) 返回截取的字符串
- s.toLowerCase() 转小写		s.toUpperCase() 转大写
