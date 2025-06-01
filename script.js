setTimeout(() => {
  document.body.innerHTML = `
    <div class="main">
      <h1 style="color: red;">⚠️ 系統已中毒！⚠️</h1>
      <p>偵測到木馬病毒活動：TROJAN.Simulated.Demo</p>
      <p>你的個人資料可能已外洩！</p>
      <p>請立即聯絡系統管理員或重新啟動系統。</p>
    </div>
  `;
  document.body.style.backgroundColor = "black";
}, 3000); // 模擬3秒後病毒啟動
