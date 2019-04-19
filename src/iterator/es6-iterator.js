// 通过Symbol.iterator属性获取迭代器迭代
var arr = [4, 5, 6, 7, 8];
var v = arr[Symbol.iterator]();
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v.next());

// 通过for of语法迭代
for (let item of arr) {
    console.log(item)
}

// 凡是具有[Symbol.iterator]属性的集合都可以使用for of语法迭代，所以我们可以写一个公用的each方法来迭代js中大多数集合，并做一些处理
function each(list) {
    for (let item of list) {
        console.log(item)
    }
}
