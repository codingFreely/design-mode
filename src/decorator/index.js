class Circle {
    draw() {
        alert('画一个圆')
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setBorder()
    }

    setBorder() {
        alert('装饰器扩展, 设置边框样式')
    }
}

const circle = new Circle()
circle.draw()

const decorator = new Decorator(circle)
decorator.draw()
