let n = +prompt(" nhap mot so tu nhien: ");

let tong = 0;

for (let i = 1; i < n; i++) {
    if (n % i === 0) {
        tong += i
    }
}

if (tong == n) {
    console.log(`${n} la so hoan hao`);
} else {
    console.log(`${n} khong phai la so hoan hao`);
}