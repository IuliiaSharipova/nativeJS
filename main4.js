const todolistID_1 = '12gh-ggy3'
const todolistID_2 = '87hg-gyf3'


const todoLists = [
    {
        id: todolistID_1,
        title: 'What to learn',
        filter: 'all',
        // tasks: [
        //     {id: 12, title: 'JS', isDone: false},
        //     {id: 13, title: 'TS', isDone: false},
        //     {id: 14, title: 'HTML', isDone: false},
        // ]
    },
    {
        id: todolistID_2,
        title: 'What to buy',
        filter: 'all',
        // tasks: [
        //     {id: 23, title: 'Beer', isDone: false},
        //     {id: 24, title: 'Meat', isDone: false},
        //     {id: 25, title: 'Fish', isDone: false},
        // ]
    }
]
const tasks = {
    [todolistID_1]: [//ассоциативный массив
        {id: 12, title: 'JS', isDone: false},
        {id: 13, title: 'TS', isDone: false},
        {id: 14, title: 'HTML', isDone: false},
    ],
    [todolistID_2]: [
        {id: 23, title: 'Beer', isDone: false},
        {id: 24, title: 'Meat', isDone: false},
        {id: 25, title: 'Fish', isDone: false},
    ]
}
console.log(tasks[todolistID_1].find(t => t.id === 12).title)
console.log([...tasks[todolistID_2], {id: 26, title: 'water', isDone: false}])
console.log(tasks[todolistID_1].map(t => t.title))

//reduce
const nums = [10, 20, 30]//find sum elements
console.log(nums.reduce((acc, el) => acc + el, 0))

//find min in array
console.log(nums.reduce((acc, el) => acc > el ? el : acc))

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
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
        age: 23,
        isMarried: false,
        scores: 100
    }
];

const sts = {
    '1': {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    }
}
console.log(students.reduce((acc,el)=>{
    acc[el.id]={...el}
    delete acc[el.id].id
    return acc
},{}))

console.log(students.reduce((acc,el)=>acc+el.scores,0))