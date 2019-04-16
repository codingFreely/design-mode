class Subject {
    constructor() {
        this.state = '休息'
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObserver()
    }
    notifyAllObserver() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
    subscribe(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.subscribe(this)
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}

const subject = new Subject()
const observer1 = new Observer('name1', subject)
const observer2 = new Observer('name2', subject)
const observer3 = new Observer('name3', subject)

subject.setState('发布')
