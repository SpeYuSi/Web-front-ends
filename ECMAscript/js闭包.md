### 闭包
- 函数使用函数之外定义的变量

### 用途：

**1.匿名自执行函数**
- 如果有的函数只需要和执行一次，内部变量不用维护，可以使用闭包
```js
var data = {
    goods : [],
}
(function (data) {
    var data = data.goods;
}(data))
```
- 这个函数只使用一次，执行后由于外部无法引用其内部变量所以会立刻释放

**3. 封装**
- 用于封装变量，外部无法访问
```js
var Person = function () {
    var name = 'xiaoming';
    return {
        getName : function () {
            return name;
        },
        setName : function (nname) {
            name = nname;
        }
    }
}();
console.log(Person.name);
console.log(Person.getName());

```
