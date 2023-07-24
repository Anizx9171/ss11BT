let number = +prompt("Nhap so")
let count = 0;
let N = 2;
let check = true;
while(count < number){
    for (let i =2; i<= (N/2);i++){
        if (N%i==0){
            check = false;
            break;
        }
    }

    if (check == true){
        document.write(`${N} `)
        count++
    }
    N++
    check = true
}