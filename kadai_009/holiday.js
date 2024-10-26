//配列の復習
const holidays = [
  "元日", "成人の日", "建国記念の日", "天皇誕生日", "春分の日",
  "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日",
  "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"
];
console.log(holidays);

//for文を使った出力
for (let i = 0; i < 16; i += 1) {
  console.log(holidays[i]);
}

//whileを使った出力
let i = 0;
while (i!==16){
  console.log(holidays[i]);
  i += 1;
}

