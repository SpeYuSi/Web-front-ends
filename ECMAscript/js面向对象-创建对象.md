#### 原始方式
- 在对象创建后动态定义对象属性和方法
```js
var oPerson = new Object;
oPerson.name = "xiaoming";
oPerson.sayHello = function (){console.log(this.name)};
oPerson.sayHello();
```

#### 工厂方式
- 给工厂函数传入参数，使得每次创建的对象的属性值不同
- 在工厂函数中使用原始方式定义对象并返回
- 将对象共有的方法定义于工厂函数外
- 促进了构造函数方式的诞生
```js
function hello() {
    console.log('Name is '+this.name);
}
function createPerson(name) {
    var oTemp = new Object;
    oTemp.name = name;
    oTemp.sayHello = hello;
    return oTemp;
}
var oxiaoli = createPerson("xiaoli");
var oxiaoming = createPerson("xiaoming");
oxiaoli.sayHello();
oxiaoming.sayHello();
```

#### 构造函数方式
- 构造函数内部不创建对象
- 使用this关键字
- 使用new关键字创建对象实例
- 使用外部定义共有方法
```js
function hello() {
    console.log('Name is '+this.name);
}
function Person(name) {
    this.name = name;
    this.sayHello = hello;
}
var oxiaoli = new Person("xiaoli");
var oxiaoming = new Person("xiaoming");
oxiaoli.sayHello();
oxiaoming.sayHello();
```

#### 原型方式
- 使用对象的prototype属性
- 缺点：
    - 没有参数导致属性值不能改变，所有对象实例的属性值一样
    - 而且对象实例的属性共享，一个属性值改变所有对象实例的属性值都改变
```js
function Person() {}
Person.prototype.name="xiaoming";
Person.prototype.sayHello = function (){console.log(this.name)};
var s = new Person();
var p = new Person();
p.sayHello();
s.sayHello();
```

#### 混合构造函数/原型方式
- 既解决了方法的重用，又解决了属性的独立性
- 可以使用 instanceof 运算符判断对象类型
- 是 ECMAScript 采用的主要方式 
```js
function Person(name) {
    this.name = name;
    this.friends = new Array('A','B')
}
Person.prototype.sayHello = function () {console.log('Name is '+this.name)};

var oxiaoli = new Person("xiaoli");
var oxiaoming = new Person("xiaoming");
oxiaoli.sayHello();
oxiaoming.sayHello();
oxiaoli.friends.push('C');
console.log(oxiaoli.friends);
console.log(oxiaoming.friends);
```

#### 动态原型方式
- 使用一个初始值来判断是否已给原型赋予了任何方法，该方法只被创建并赋值一次

```js
function Person(name) {
    this.name = name;
    this.friends = new Array('A','B')
    
    if(typeof Person._init == "undefined"){
        Person.prototype.sayHello = function () {console.log('Name is '+this.name)};
    }
    Person._init = true;
}
var oxiaoli = new Person("xiaoli");
var oxiaoming = new Person("xiaoming");
oxiaoli.sayHello();
oxiaoming.sayHello();
oxiaoli.friends.push('C');
console.log(oxiaoli.friends);
console.log(oxiaoming.friends);
```
