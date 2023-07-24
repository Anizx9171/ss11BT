let N = 0;
do {
    N = Number(prompt("Nhap so N ma ban muon"))
} while(N < 2 || N > 100)

let bp = 0
for(let i = 2; i <= N; i++) {
    bp = Math.pow(i, 2)
    document.write(`${bp} `);
}
