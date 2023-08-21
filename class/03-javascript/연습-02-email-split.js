const email="codecamp@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
(2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userName= email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
let maskingMail=[]
// undefined
maskingMail.push(userName[0])
// 1
maskingMail.push(userName[1])
// 2
maskingMail.push(userName[2])
// 3
maskingMail.push(userName[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']0: "c"1: "o"2: "d"3: "e"length: 4[[Prototype]]: Array(0)
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
// 'code****'
maskingMail.join("") + "@"+company
// 'code****@gmail.com'
result=maskingMail.join("") + "@"+company
// 'code****@gmail.com'
result
// 'code****@gmail.com'
// result
// 'code****@gmail.com'
result
// 'code****@gmail.com'
result
// 'code****@gmail.com'