//answers
// 1: 8, 1846
// 2: yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659
// 3: Your name is Alejandro and you like purple, Your name is Milissa and you like green, `Your name is undefined and you like green
// 4: Maya, Marisa, Chi
// 5:   "Raindrops on roses",  "whiskers on kittens", "Bright copper kettles","warm woolen mittens", "Brown paper packages tied up with strings"
// 6: 10, 30, 20
// 7:

let obj = 
{
    numbers : {
        a : 1,
        b : 2
    }
}
let {a,b} = obj.numbers
// 8:

let arr = [1, 2]
let temp = [2, 1]
arr = temp

// 9:

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
