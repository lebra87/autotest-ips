{
    class Car {
        private isTurn: boolean = false
        private speed: number = 0

        public turnOn(): void {
            this.isTurn = true
        }

        public turnOff(): void {
            this.speed === 0
                ? this.isTurn = false
                : console.log('Невозможно выключить двигатель на скорости!')
        }

        public getState(): void {
            let state: string = 'выключен'

            if (this.isTurn) {
                state = 'включен'
            }

            console.log(`Двигатель ${state}, скорость: ${this.speed} км/ч`)
        }

        protected canSetSpeed(speed: number): boolean {
            if (!this.isTurn) {
                console.log('Нельзя изменить скорость! Двигатель не включен!')
                return false
            }
            const isValidSpeed: boolean = speed >= 0 && speed <= 100;

            if (!isValidSpeed) {
                console.log('Введенное значение скорости не верно!')
            }

            return isValidSpeed
        }

        public setSpeed(speed: number): void {
            if (this.canSetSpeed(speed))
                this.speed = speed
        }
    }

    const car: Car = new Car()
    car.getState()
    //car.setSpeed(60)
    car.turnOn()
    //car.turnOff()
    car.getState()
    car.setSpeed(5)
    car.getState()
    // car.setSpeed(20)
    // car.getState()
    car.turnOff()
    car.setSpeed(0)
    car.getState()
    car.turnOff()
    car.getState()
}