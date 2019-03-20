class Adaptee {
    specialRequest() {
        return '德国标准插头'
    }
}

class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee
    }

    request() {
        return `${this.adaptee.specialRequest()} -> 适配器 -> 中国标准插头`
    }
}

const adapter = new Adapter(new Adaptee())
alert(adapter.request())
