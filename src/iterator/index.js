class Iteraotr {
    constructor(container) {
        this.list = container.list
        this.index = 0
    }

    next(){
        if (this.hasnext()) {
            return this.list[this.index++] // 对象属性也可以使用 ++运算
        }
        return null
    }

    hasnext() {
        return this.index < this.list.length
    }
}

class Contianer {
    constructor(list) {
        this.list = list
    }

    createIterator() {
        return new Iteraotr(this)
    }
}

// test
const arr = [1, 2, 3, 4, 5, 6]
const container = new Contianer(arr)
const iterator = container.createIterator()
while(iterator.hasnext()) {
    console.log(iterator.next())
}
