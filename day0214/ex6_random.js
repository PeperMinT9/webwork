var arr = new Array()
arr.push("안녕하세요")
arr.push("오늘은 화요일입니다")
arr.push("우리는 랜덤함수를 공부하고 있어요")
arr.push("이제 점심시간이 다가오네요")
arr.push("오늘도 화이팅!!")

// setInterval을 0.5초 마다 위의 문자열이 한개씩 출력되도록 작성

// function sign_interval() {
//     var i = parseInt(Math.random() * 10) % 5
//     console.log(arr[i])
// }

// function sign_led() {
//     setInterval(sign_interval, 500)
// }
setInterval(() => {
    var i = parseInt(Math.random() * 10) % 5
    console.log(arr[i])
}, 500)

// sign_led()