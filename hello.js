// // // let data=[20,30,50,3,14,76,98]
// // // for(el of data )
// // //     console.log(el * 2)



// // // // for( let i = 1 ; i<= 10; i++)
// // // // console.log(i * 2 )

// // // let data=[20,30,50,3,14,76,98 ,30,20]
// // //   let s=data.sort( el => a,b  = (a-b))
// // //   console.log(s);
  


// // //for each example---------------------------------=-------------
// let country = ["IND","PAK","SL","AUS","USA"]
// // let country_lower = []
// // country.forEach(el,indexedDB,arr => country_lower.push(el.toLowerCase ))
// // console.log(country_lower);

// // country.forEach(el,indexedDB,arr => country_lower.push(el.toUpperCase ))

// // //other example-------------------------------------
// // let num = [2,5,6,3,8,7,9]
// // num.forEach(el => console.lof(el*el))

// // // map example--------------------------------
// // let num = [2,5,6,3,8,7,9]
// // let out = num.map(el => el * 5)
// // console.log(out)

// // //filter example------------------------------------------
// // let out = num.filter(let => el % 2 === 0)
// // console.log(out)

// // // reduce example-----------------------------------------
// // let out = num.reduce(acc , el => acc + el)
// // //or
// // let out = num.reduce(acc , el => acc + el + 100)
// // console.log(out)

// // //expmale redue right--------------------------------

// let out = country.reduceRight(acc,el =>acc+el,"==>")
// console.log(out)

// //example for  some --------------------------------
// let age = (12,32,44,64,4,55,65)
// let voter = age.some(el =>el>=18)
// console.log(voter)

// //example for every ------------------------------------------

// let voters = people_age.every(el => el >= 18)
// console.log(voters);

// //example for function usig the every method --------------
// let check_voter = function(el){
//   return el >= 18
// }
// let voter =  age.some(check_voter)
// console.log(voter)

// //example for the flat array ------------------------
// let matrix =[[10,20,30],
// [20,[50,90],80],
// [30,50,60]]
// console.log(matrix.flat(2))
// console.log(matrix.flat())

// //or

// console.log(matrix.flatMap(el => el))

// // example for the find method ------------------

// let data = [10,39,85,87,38,30,6,93]
// let out =data.find(el => el%4 == 0)
// console.log(out)


// //example for the sort method-------------------
let data = [10,39,85,87,38,30,6,93]

 console.log(data.sort((a,b)=> a-b))

// // reverse)0
//  console.log(data.sort((a,b) => b-a))



