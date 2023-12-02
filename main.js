
///////////////////////////////// ▼ JSON読み込み（内部） ▼ /////////////////////////////////

const dataList = [
  { "name": "沖縄", "point": "那覇", "text": { "spot": "首里城", "eat": "ゴーヤ" } },
  { "name": "広島", "point": "広島市", "text": { "spot": "厳島神社", "eat": "お好み焼き" } },
  { "name": "北海道", "point": "札幌", "text": { "spot": "札幌ドーム", "eat": "いくら" } },
  { "name": "京都", "point": "京都府", "text": { "spot": "金閣寺", "eat": "八橋" } },
  { "name": "奈良", "point": "奈良市", "text": { "spot": "奈良の大仏", "eat": "鹿せんべい" } }
]
const url = dataList;

window.addEventListener("load", () => {
  let html = "";
  url.forEach((data) => {
    console.log(data.text.eat);
    html += `<p>${data.point}の食べ物：${data.text.eat}</p>`;
    html += `<img src="https://sp.beach.jp/KIZUNA/lp/narikiri/assets/images/box02.png" alt="" />`;
  });
  html = `<p>${html}</p>`;
  document.getElementById("containerJs").innerHTML = html;
});

///////////////////////////////// ▲ JSON読み込み（内部） ▲ /////////////////////////////////








///////////////////////////////// ▼ JSON読み込み（外部） ▼ /////////////////////////////////

// const url = "./smple.json";

// const fileJson = (datas) => {
//   let html = "";
//   datas.forEach((data) => {
//     console.log(data.text.eat);
//     html += `<p>${data.point}の食べ物：${data.text.eat}</p>`;
//     html += `<img src="${data.image}" alt="" />`;
//   });
//   html = `<p>${html}</p>`;
//   document.getElementById("containerJs").innerHTML = html;
// };

// //起動時の処理
// window.addEventListener("load", async () => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     fileJson(data);
//   } catch (error) {
//     console.error(error);
//     console.log("データの取得に失敗しました。");
//   }
// });

///////////////////////////////// ▲ JSON読み込み（外部） ▲ /////////////////////////////////