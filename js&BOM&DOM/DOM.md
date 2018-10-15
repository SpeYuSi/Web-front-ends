### HTML DOM对象


**文档对象**
Dom对象集合：
all[]  返回对文档中所有 HTML 元素的引用,document.all[i/name]和document.all.tags[tagname]
anchors[]  返回对文档中所有a标签的引用,document.anchors[i]
forms[] 返回文档中所有form的引用 document.forms[i]
images[] 返回文档中所以Image的引用 document.images[i]
links[] 返回文档中所有 Area 和 Link 对象的引用 document.links[i]

属性：
document.cookie 可读写字符串，可对当前文档cookie进行读取、创建、修改和删除操作
document.domain 只读字符串，返回文档主机域名
document.lastModified 来自于http请求头的Last-Modified，返回文档最后被修改的日期和时间
document.referrer 返回载入当前文档的文档的 URL
document.title 返回当前文档的标题
document.URL 返回当前文档的 URL，在url重定向发生的时候，这个保存了文档的实际url，而 location.href保存了请求的url

方法：
document.open(mimetype,"replace")  打开一个新文档，并擦除当前文档的内容
document.write(exp1,exp2,....) 向文档写入HTML表达式或js代码
document.writeln(exp1,exp2,....) 与write()作用相同，在每个表达式后写一个换行符
document.close() 关闭一个由document.open方法打开的输出流，并显示数据


**元素对象**

属性操作：
e.attributes 返回元素的属性数组
e.getAttribute(attrname) 返回元素的指定属性值
e.getAttributeNode(attrname) 返回元素的指定属性节点对象
e.setAttribute(attrname,attrvalue) 设置元素的属性和属性值
e.setAttributeNode(attrnode) 给元素添加属性节点
e.hasAttribute(attrname) 判断元素是否有该属性，返回bool值
e.hasAttributes() 判断节点是否拥有属性
e.removeAttribute(attrname) 移除元素的指定属性
e.removeAttributeNode(attrnode) 移除元素的指定属性节点，并将其返回



元素操作：
e.appendChild(enode) 向元素添加子节点
e.insertBefore(newnode,existnode) 在元素已经存在的子节点前插入子节点
e.childNodes 返回该元素子节点数组
e.firstChild 返回元素的首个子节点
e.lastChild 返回元素的最后一个子节点
e.removeChild(enode) 删除并返回元素的指定子节点
e.replaceChild(newnode,oldnode) 替换并返回元素的指定子节点
e.hasChildNodes() 判断元素是否拥有子节点
e.parentNode 返回元素的父节点
e.previousSibling 返回元素的前一个兄弟节点
e.nextSibling 返回元素的后一个兄弟节点
e.innerHTML 返回或设置元素的inner HTML
e.cloneNode(deep) 返回一个克隆节点，deep表示是否克隆属性

e.accessKey 设置或返回元素的快捷键   alt+accessKey