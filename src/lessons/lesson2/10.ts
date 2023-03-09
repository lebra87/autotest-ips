{
    class Car {
        private turn: boolean = false
        private speed: number = 0

        public turnOn() {
            this.turn = true
        }

        public turnOff() {
            this.turn = !(this.speed === 0)
            if (this.turn)
                console.log('Невозможно выключить двигатель на скорости!')
        }

        public getState() {
            let state: string = 'выключен'
            if (this.turn)
                state = 'включен'
            console.log(`Двигатель ${state}, скорость: ${this.speed} км/ч`)
        }

        public setSpeed(speed: number) {
            if (this.turn) {
                if (speed >= 0 && speed <= 100) {
                    this.speed = speed
                } else {
                    console.log('Введенное значение скорости не верно!')
                }
            } else {
                console.log('Нельзя изменить скорость! Двигатель не включен!')
            }
        }
    }

    const car: Car = new Car()
    car.getState()
    car.setSpeed(60)
    car.turnOn()
    car.getState()
    car.setSpeed(-5)
    car.getState()
    car.setSpeed(20)
    car.getState()
    car.turnOff()
    car.setSpeed(0)
    car.getState()
    car.turnOff()
    car.getState()
}