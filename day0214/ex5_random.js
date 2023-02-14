var num = new Array(5)


for(let i = 0; i < 5; i++) {
    num[i] = parseInt(Math.random() * 10) + 1

    for(let j = 0; j < i; j++) {
        if(num[i] == num[j]) {
            i--;
            break;
        }
    }
}

console.log(num)
