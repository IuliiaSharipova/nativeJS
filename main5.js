/*const names=['Bob', 'Ilia', 'Alex']//sort a->z
console.log(names.sort())*/

const names = ['Bob', 'Ilia', 'Alex', 'alex', '007', 'Юрий']
console.log(names.sort())

const numbers = [100, 9, 66, 1000]
console.log(numbers.sort())

/*const compareFn = (a, b) => {//increase
    if (a > b) {
        return 1000
    } else {
        return -1000
    }
}*/
const compareFn = (a, b) => a - b
console.log(numbers.sort(compareFn).reverse())


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
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
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

/*console.log(students.sort((a, b) => b.scores - a.scores))
console.log(students.sort((a, b) => a.name.localCompare(b)))*/
console.log(students.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1))

//bubble sort
const nums = [54, 11, 36, 32, 67, 89, 25]

/*for (let j = 0; j < nums.length - 1; j++) {
    let isSorted=true //optimisation, shouldn't use
    for (let i = 0; i < nums.length - 1 - j; i++) { //increase
        if (nums[i] > nums[i + 1]) {
            isSorted=false //optimisation, shouldn't use
            const temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp
        }
    }
    if(isSorted)break //optimisation, shouldn't use
}*/
//On2 difficult

for (let j = 0; j < nums.length - 1; j++) {
    let isSorted = true
    for (let i = 0; i < nums.length - 1 - j; i++) { //increase
        if (nums[i] > nums[i + 1]) {
            isSorted = false; //need to use ;    !!!!
            [nums[i + 1], nums[i]] = [nums[i], nums[i + 1]] //destructurisation
        }
    }
    if (isSorted) break
}
console.log(nums)