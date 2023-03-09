type Student = {
    name: string,
    age: number,
}

const students: Student[] = [
    {name: 'Иван', age: 19},
    {name: 'Петр', age: 21},
    {name: 'Федор', age: 18},
    {name: 'Мария', age: 20},
]

students.forEach(student => {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}`)
})

