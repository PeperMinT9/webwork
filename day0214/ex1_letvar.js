// var: 함수형 변수
// let: 영영형 변수

var a = 1
let b = 2

function test1() {
    var a = 3 // 새로 생성, 외부의 a와 전혀 다른 변수로 생성
    let b = 4 // 새로 생성

    if(true) {
        var a = 5 // 덮어쓴다, 8번라인의 a에 덮어씀
        let b = 6 // 새로 생성
        console.log(`a=${a}, b=${b}`) // 5, 6
    }
    console.log(`a=${a}, b=${b}`) // 5, 4
}

test1()
console.log(`a=${a}, b=${b}`)