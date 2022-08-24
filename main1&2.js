//#1 lesson
console.log('YO')
const user = {}//#123
const user2 = user//#123. произошло повторное присвоение ссылки
console.log(user === user2)//true
//{}, new Object() -создание нового объекта
console.log({} === {})//false
const arr = []
const arr2 = arr //не создан новый массив, присвоена та же ссылка

//#2 lesson
const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (arr) => {
    const result = [];
    //
    const getNewValue = (el) => el.name
    //
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}
console.log(getNames(students))

const getGreetings = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = `Hi, I am ${arr[i].name}`
        result[i] = newValue
    }
    return result
}
console.log(getGreetings(students))


const addScores = (arr) => {
    const result = []
    //1.Взять каждый элемент исходного массива
    //2. Получить из него новое значение
    //3. Поместить значение в новый массив
    //
    const getNewValue = (el) => ({...el, scores: el.scores + 10})
    //
    for (let i = 0; i < arr.length; i++) {
        const newValue = getNewValue(arr[i])
        result[i] = newValue
    }
    return result
}
console.log(addScores(students))

//Повторяется все кроме функции call-back, поэтому делаем ее параметром
const getName = (el) => el.name
const addScoresForStudents = (el) => ({...el, scores: el.scores + 10})

const getMappedArray = (arr, mapFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = mapFn(arr[i])
        result[i] = newValue
    }
    return result
}
console.log(getMappedArray(students,
    getName))
console.log(students.map(getName))
console.log(getMappedArray(students, addScoresForStudents))

const getFilteredArray = (arr, filterFn) => {
    //1.Взять каждый элемент исходного массива
    //2. Проверить каждый элемент на соответствие условию
    //3. Если соответствует, поместить элемент в новый массив
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = filterFn(arr[i]) //true or false
        if (newValue === true) {  //newValue && result.push(arr[i])
            result.push(arr[i])
        }
    }
    return result
}
console.log(getFilteredArray(students, st => st.age > 20))

const selfMadeFilter = (arr, findFn) => {
    for (i = 0; i < arr.length; i++) {
        const newValue = findFn(arr[i])
        if (newValue === true) {
            return arr[i]
        }
    }
}
console.log(selfMadeFilter(students, st => st.name === 'Nick'))
//аналог find. возвращает первый элемент, удовлетворяющий условиям.
// не создается новый массив
console.log(students.find(st => st.name === 'Nick'))