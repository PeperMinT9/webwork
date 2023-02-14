//임의의 숫자를 구한다 Math.random()
var a = Math.random()
console.log(a)
console.log("0~9 사이의 난수 5개 구하기")
for(let i = 0; i < 5; i++) {
    let r = parseInt(Math.random() * 10)
    console.log(r)
}
console.log("0~10 사이의 난수 5개 구하기")
for(let i = 0; i < 5; i++) {
    let r = parseInt(Math.random() * 11)
    console.log(r)
}
console.log("0~99 사이의 난수 5개 구하기")
for(let i = 0; i < 5; i++) {
    let r = parseInt(Math.random() * 100)
    console.log(r)
}
