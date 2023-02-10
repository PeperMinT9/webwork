// 두수를 인자로 받아서 더한값을 반복하는 함수를 3가지 방법으로 만들어보자

function add1(su1, su2) {
    return su1 + su2
}

var add2 = function(su1, su2) {
    return su1 - su2
}

var add3 = (su1, su2) => su1 * su2

console.log(add1(3, 4))
console.log(add2(3, 4))
console.log(add3(3, 4))