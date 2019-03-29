// 明星
const star = {
    name: '张xxx',
    age: 25,
    phone: '123456789'
}

let agent = new Proxy(star, {
    get(target, key) {
        if (key === 'phone') {
            // 返回经纪人自己电话
            return '987456132'
        }
        if (key === 'price') {
            // 明星不报价，经纪人报价
            return 12000
        }
        return target[key]
    },
    set(target, key, val) {
        if (key === 'customPrice') {
            if (val < 12000) {
                // 最低10w
                throw new Error('价格太低')
            } else {
                console.log('价格合适')
                target['customPrice'] = val
                return true
            }
        }
    }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)

agent.customPrice = 9000
agent.customPrice = 13000
