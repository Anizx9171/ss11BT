let color = 0;
for (i = 0; i < 10; i++) {
    color = 100 + Math.floor(Math.random() * 899);
    console.log("%c ĐÂY LÀ NỘI DUNG", `color: #${color}`);
}