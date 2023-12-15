let products = [
    {
        name: "tvorog",
        type: "milk",
        price: 10000
    },
    {
        name: "apple",
        type: "fruit",
        price: 5000
    },
    {
        name: "govyadina",
        type: "meat",
        price: 100000
    },
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "banan",
        type: "fruit",
        price: 20000
    },
    {
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {
        name: "sir",
        type: "milk",
        price: 16000
    },
]

let categories = [
    {
        name: "meat",
        arr: [],
        amount: 0,
        total: 0
    },
    {
        name: "milk",
        arr: [],
        amount: 0,
        total: 0
    },
    {
        name: "fruit",
        arr: [],
        amount: 0,
        total: 0
    },
]


// for (let product of products) {
//     let fac = product.type
//     for (let category of categories) {
//         let double_fac = course.name
//         if (fac === double_fac) {
//             category.amount++
//          category.arr.push(product.name)

//         }


//     }
// }




for(let prod of products) {
    for(let category of categories) {
        if(category.name === prod.type) {
            category.total += prod.price
            category.arr.push(prod)
            category.amount++
        }
    }
}
console.log(categories);

let maxTotal = categories.reduce((max, category) => {
    return category.total > max ? category.total : max;
}, categories[0].total);
console.log(maxTotal);

let minTotal = categories.reduce((min, category) => {
    return category.total < min ? category.total : min;
}, categories[0].total);
console.log(minTotal);



