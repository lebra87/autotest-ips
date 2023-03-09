class Car {
    private turn: boolean = false

    public turnOn() {
        this.turn = true
    }

    public turnOff() {
        this.turn = false
    }

    public getState() {
        let state: string = 'off'
        if (this.turn)
            state = 'on'
        console.log(`Car is turn ${state}`)
    }
}

const car: Car = new Car()
car.getState()
car.turnOn()
car.getState()