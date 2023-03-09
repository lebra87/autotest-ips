type Cat = {
    name: string,
    breed: string,
    age?: number,
}
const cats: Cat[] = [
    {name: 'Мурка', breed: 'Русская голубая'},
    {name: 'Барсик', breed: 'Британец', age: 3},
    {name: 'Кокос', breed: 'Нибелунг', age: 1},
    {name: 'Васька', breed: 'Беспородный'},
]
cats.forEach(cat => {
    console.log(`Кличка: ${cat.name}\nПорода: ${cat.breed}\nВозраст: ${cat.age}\n`)
});
