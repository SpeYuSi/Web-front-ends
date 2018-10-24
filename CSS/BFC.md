### BFC(块级格式化上下文)

**特征**
1. 浮动
2. 绝对定位的元素(absolute、fixed定位)
3. 块容器(display属性为inline-block、table、table-cell、table、table-caption)
4. 带有overflow属性(该属性值不为visible和inherit)的display为block的块级元素会在其内部建立新的块级格式化上下文。
 
**生成**
1. 设置浮动
2. 设置绝对定位
3. 设置display属性为inline-block、table、table-cell、table-caption
4. 设置overflow属性为 hidden、auto、scroll

**作用**

1. 元素们处于同一个BFC时，盒子会在竖直方向一个接一个地放置，垂直margin重叠
2. 元素们处于同一个BFC时，盒子的左margin会挨着包含块的左margin
3. BFC内部的元素不会影响外部的元素

**应用**
1. 在父元素内部生成新的BFC，可以阻止父子元素的margin重叠
2. 在文字容器中生成BFC可以阻止文字围绕浮动元素
3. 在父容器中生成BFC可以解决浮动导致的高度塌陷，父元素overflow：hidden