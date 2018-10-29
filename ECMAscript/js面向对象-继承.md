### 对象冒充继承

#### 1. 对象冒充
- 在子类中将父类的构造函数作为方法并执行，用来获取父类的属性和方法
- 使用于使用构造函数定义的对象

**注意点**：
- 实现多继承时后继承类的属性会覆盖前面继承的同名属性
```js
function ClassA(color) {
    this.color = color;
    this.sayColor = function () {
        console.log(this.color+' A')
    }
}
function ClassC(color) {
    this.color = color;
    this.sayColor = function () {
        console.log(this.color +' C')
    }
}
function ClassB(color,name) {
    this.newMethod = ClassA;
    this.newMethod(color);
    delete this.newMethod;

    this.newMethod = ClassC;
    this.newMethod(color);
    delete this.newMethod;
    this.name= name;
    this.sayName=function () {
        console.log(this.name+' B')
    }
}
var green = new ClassA('green')
var red = new ClassB('red','jack')
green.sayColor();
red.sayColor();
red.sayName();
```

#### 2. call方法
- call方法的第一个参数作为函数执行的this，其他参数都传给函数
- 冒充继承的基础上使用call方法来替代在子类中对父类的调用
```js
function Person(name) {
    this.name=name;
    this.sayHello=function () {
        console.log('hello '+ this.name);
    }
}
function Student( name,age,collage) {
    Person.call(this,name);
    this.collage=collage;
    this.sayCollage=function () {
        console.log(this.name+'\'s collage: '+this.collage);
    }
}
var xiaoming = new Student('xiaoming','SWPU');
xiaoming.sayCollage();
xiaoming.sayHello();
```
####3. 使用apply方法
- apply方法的参数是一个作为函数this的对象和一个参数数组
- 与call方法相同使用apply也可以实现冒充继承
- 注意点：apply接收的参数数组必须和方法要求的参数相同
```js
function Person(name) {
    this.name=name;
    this.sayHello = function(){console.log('Hello '+this.name)};
}
function Student(name,age) {
    var arr=[];
    arr.push(arguments[0])
    Person.apply(this,arr);
    this.age=age;
    this.showAge= function() {console.log('My age is '+this.age)};
}
var xiaoming = new Student('xiaoming','21')
xiaoming.showAge();
xiaoming.sayHello();
```

### 原型链继承
- 原型继承基于原型方式定义的对象
- 将子类的prototype属性指向父类的一个实例
- 基于原型链：
   - 对象.prototype->原型对象   原型对象.constructor->对象  对象实例.__proto__指向原型对象
- 注意点：
   - 对子类新属性的赋值要在对子类的prototype属性赋值之后
   - 对子类实例的 instanceof 运算符对父类和子类都是 true
   
```js
function Person() {}
Person.prototype.name = "";
Person.prototype.sayHello = function(){console.log('My name is '+this.name)};

function Student(){}
Student.prototype = new Person();
Student.prototype.age = ""
Student.prototype.sayAge = function(){console.log('Age is '+this.age)};

var p = new Person();
var s = new Student();
console.log(Student.prototype)
console.log(s.__proto__)
console.log(p.__proto__)
p.name = 'xiaoming';
s.name = 'xiaoli';
s.age = '21';
p.sayHello();
s.sayHello();
s.sayAge();
```

### 混合方式
- 混合使用两种方式
- 使用冒充继承属性，原型继承方法

```js
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {console.log('Hello '+this.name)};
function Student(name, age) {
    Person.call(this, name);
    this.age = age;
}
Student.prototype = new Person();
Student.prototype.sayAge = function () {console.log('Age is '+ this.age)};

var p = new Person('xiaoli');
var s = new Student('xiaoming','21');
p.sayHello();
s.sayHello();
s.sayAge();
```
