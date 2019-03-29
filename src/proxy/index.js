class RealImg {
    constructor(filename) {
        this.filename = filename
        this.loadingFromDisk()
    }
    display() {
        alert(`show ${this.filename}`)
    }
    loadingFromDisk() {
        alert(`loading ${this.filename}`)
    }
}

class ProxyRealImg {
    constructor(realImg) {
        this.realImg = realImg
    }
    display() {
        this.realImg.display()
    }
}

const proxyRealImg = new ProxyRealImg(new RealImg('img_1.jpg'))
proxyRealImg.display()
