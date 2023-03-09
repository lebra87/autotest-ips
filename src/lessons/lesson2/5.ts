class Car {
    private isTurn: boolean = false

    public turnOn(): void {
        this.isTurn = true
    }

    public turnOff(): void {
        this.isTurn = false
    }

    public getState(): void {
        console.log(`Car is turn ${this.isTurn ? 'on' : 'off'}`)
    }
}

const car: Car = new Car()
car.getState()
car.turnOn()
car.getState()
car.turnOff()
car.getState()