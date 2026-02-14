const maps = {
  nakamura: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.9494897385307!2d141.34947577614582!3d43.063529871136204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b299de4849179%3A0x745c72c356a2de45!2z5a-_44GX5b-DIOOBquOBi-OCgOOCiQ!5e0!3m2!1sja!2sjp!4v1771052797205!5m2!1sja!2sjp", // Google Mapの「地図を埋め込む」のURL
    comment: "北海道の新鮮なネタが魅力の寿司屋。"
  },
  futago: {
    url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.223161411646!2d141.34346487632902!3d43.0788034711352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b290035af5d1b%3A0x7f14289aca675690!2z44G144Gf44GU44K244Oz!5e0!3m2!1sja!2sjp!4v1771052859133!5m2!1sja!2sjp",
    comment: "ボリューム満点の海鮮丼が800円で食べれて大人気！"
  },
  sakata: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.704840329255!2d141.3441483763288!3d43.076085671135345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b290f0d1db70d%3A0xf7b233b08095bb8f!2z44Gd44Gw5YiH44KK44GV44GL55Sw!5e0!3m2!1sja!2sjp!4v1771052947986!5m2!1sja!2sjp", comment: "香り高い手打ちそばが絶品。" },
  zangi: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46629.645803396816!2d141.2973692654418!3d43.07607636587243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2906e8dce6c1%3A0xcb692efda0f3451b!2z5pyt5bmM44K244Oz44Ku5pys6IiXIOacreW5jOmnheWMl-WPo-W6lw!5e0!3m2!1sja!2sjp!4v1749527633383!5m2!1sja!2sjp", comment: "札幌駅すぐの名物ザンギ店。" },
  kuro: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.5991564852256!2d141.34843189999998!3d43.07089740000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b290ba30ebadd%3A0x88140a2bdf06e2b9!2z6buS44KA44GO!5e0!3m2!1sja!2sjp!4v1752038674519!5m2!1sja!2sjp", comment: "北大正門からすぐ近くの隠れ家的名店。" },
  yaso: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.433196237936!2d141.3484374!3d43.074387200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29ac6d9207f9%3A0xb10d6c832f48260d!2z44GU44Gv44KT44Go44Gg44GXIOOChOOBneOBr-OBoQ!5e0!3m2!1sja!2sjp!4v1752038960143!5m2!1sja!2sjp", comment: "夫婦で切り盛りしている和定食屋。並ぶの必至。" },
  "6-21": { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.885724277553!2d141.34165907673756!3d43.08589778893636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b29242be7bcf7%3A0x5c910de4025f1368!2z5rGB44Gq44GX5YWt6ba0IOWMlzIx5p2h5bqX!5e0!3m2!1sja!2sjp!4v1752039336762!5m2!1sja!2sjp", comment: "学生の味方、激安つけ麺！" },
  saka: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2178.9117995006745!2d141.34461588959513!3d43.080887654554836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b296dd27cd69b%3A0x3d93fb15b765e03c!2skitchen%20SAKA!5e0!3m2!1sja!2sjp!4v1752039398332!5m2!1sja!2sjp", comment: "隠れ家的雰囲気の美味しいオムライス屋さん" },
  miyasho: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.886020886437!2d141.3335493!3d43.064864699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b290042334453%3A0xa55e0c902c0a0b5c!2z6bq644Go5rW344Gu5bm4IOWuruWVhg!5e0!3m2!1sja!2sjp!4v1752231126682!5m2!1sja!2sjp", comment: "落ち着いた雰囲気の美味しいラーメン屋さん。" },
  newkeiwa: { url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.3927052071635!2d141.3476541761453!3d43.05420757113693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b298592920597%3A0x1901f62c7c3c01cc!2z44OL44Ol44O85qGC5ZKM44OT44OrIOOBmeOBmeOBjeOBruODk-OCouOCrOODvOODh-ODsw!5e0!3m2!1sja!2sjp!4v1752817293152!5m2!1sja!2sjp", comment: "3500円のビアガ" }
};

function showMap(key) {
  const shop = maps[key];
  if (!shop) return;

  // Mapとコメントの更新
  document.getElementById('map-frame').src = shop.url;
  document.getElementById('comment-box').textContent = shop.comment;

  // サイドバーのアクティブ表示の切り替え
  const listItems = document.querySelectorAll('.sidebar li');
  listItems.forEach(li => {
    li.classList.remove('active');
    if (li.textContent.includes(key === '6-21' ? '北21条店' : shop.comment.substring(0,2))) {
       // 簡易的な判定。本来はHTML側で引数を調整するのがベスト。
    }
  });
  
  // クリックされた要素にactiveクラスを付与
  event.currentTarget.classList.add('active');
}

function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", newTheme);
}

// 初期化（一番上のお店を表示）
window.onload = () => {
  showMap('nakamura');
};
