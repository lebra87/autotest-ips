{
    class Car {
        private isTurn: boolean = false
        private speed: number = 0

        public turnOn(): void {
            this.isTurn = true
        }

        public turnOff(): void { //нужны типы методам
            this.speed === 0 ? this.isTurn = false : console.log('Невозможно выключить двигатель на скорости!')
        }

        public getState(): void {
            let state: string = 'выключен'
            this.isTurn ? state = 'включен' : console.log(`Двигатель ${state}, скорость: ${this.speed} км/ч`)
        }

        public setSpeed(speed: number): void {
            if (this.isTurn) {
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
    // car.setSpeed(60)
    car.turnOn()
    car.turnOff()
    // car.getState()
    // car.setSpeed(-5)
    // car.getState()
    // car.setSpeed(20)
    // car.getState()
    // car.turnOff()
    // car.setSpeed(0)
    // car.getState()
    // car.turnOff()
    // car.getState()
}