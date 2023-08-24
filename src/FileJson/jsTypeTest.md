> 首先要知道js中有哪些数据类型，js中数据类型分为基本数据类型和引用数据类型

> 基本数据类型：string、boolean、undefined、null、number、symbol；

> 引用数据类型：Object、Function、Array

判断数据类型有几种方法

## typeof

> null，对象，数组都会判断为 object

```js
    console.log(typeof 1)    //number
    console.log(typeof false)    //boolean
    console.log(typeof '1')    //string
    console.log(typeof undefined)    //undefined
    console.log(typeof function a(){})    //function
    console.log(typeof Symbol())    //symbol
    console.log(typeof null)    //object
    console.log(typeof {})    //object
    console.log(typeof [])    //object
    
```

## instanceof

用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

```js
    let obj = {};
    let fn = function () {};
    let arr = [];
    null instanceof Object    //false
    obj instanceof Object    //true
    fn instanceof Function    //true
    arr instanceof Array    //true
```

由于此方法是通过原型链来找，可以使用Object包裹判断基本数据类型

```js
    let str = Object('1');
    let num = Object(1);
    let bol = Object(false);
    str instanceof String    //true
    num instanceof Number    //true
    bol instanceof Boolean    //true
    //使用Object 包裹 undefined和null 都会等于 {}
```

## Object.prototype.toString.call

此方法通过call修改this指向来调用Object上的toString方法，进而判断数据类型。

```js
    const toStr = Object.prototype.toString
    
    toStr.call(1)    //[object Number]
    toStr.call('1')    //[object String]
    toStr.call(false)    //[object Boolean]
    toStr.call(Symbol())    //[object Symbol]  
    toStr.call(undefined)    //[object Undefined]  
    toStr.call(null)    //[object Null]  
    toStr.call({})    //[object Object]
    toStr.call([])    //[object Array]
    toStr.call(function () {})    //[object Function]
```
