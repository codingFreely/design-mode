class SingleObject {
    login() {
        console.log('login ...')
    }
}

SingleObject.getInstance = (function() {
    let instance
    return function() {
        if (!instance) {
            instance  = new SingleObject()
        }
        return instance
    }
})()

const obj1 = SingleObject.getInstance()
const obj2 = SingleObject.getInstance()

alert(`obj1 === obj2 : ${obj1 === obj2}, 为同一实例`)
