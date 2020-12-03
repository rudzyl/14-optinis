class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    voice() {
        console.log(`${this.name}: ${this.sound}`);
    }
}

export { Animal }