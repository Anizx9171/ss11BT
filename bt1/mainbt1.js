let str = ""
for (let i = 1; i <= 10; i++) {
    let std = ""
    for (let j = 1; j <= 10; j++) {
        std = std + `<td> ${i} x ${j} = ${i * j}</td>`
    }
    str += `<tr>${std}</tr>`
}
tbody.innerHTML = str;
let ths = "";
for(let i=1; i<=10;i++){
    ths+= `<th>${i}</th>`
}
document.getElementById("thead").innerHTML=`<tr>${ths}</tr>`