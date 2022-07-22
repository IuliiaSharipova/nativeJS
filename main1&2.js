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
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
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

const addScores = (arr) => {
    const result = []
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
console.log(getMappedArray(students, addScoresForStudents))

const getFilteredArray = (arr, filterFn) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = filterFn(arr[i])
        if (newValue === true) {
            result.push(arr[i])
        }
    }
    return result
}
console.log(getFilteredArray(students, st => st.age > 20))

const getStudent=(arr,findFn)=>{
    for (i=0; i<arr.length;i++){
        const newValue = findFn(arr[i])
        if (newValue === true) {
            return arr[i]
        }
    }
}
console.log(getStudent(students, st=>st.name === 'Nick')) //аналог find. возвращает первый элемент, удовлетворяющий условиям. не создается новый массив