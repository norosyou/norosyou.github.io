//ボタンがクリックされたら
$(".openbtn1").click(function () {
	//ボタン自身に activeクラスを付与し
	$(this).toggleClass('active');
	//ナビゲーションにpanelactiveクラスを付与
	$("#g-nav").toggleClass('panelactive');
	//丸背景にcircleactiveクラスを付与
	$(".circle-bg").toggleClass('circleactive');
  });
  
//ナビゲーションのリンクがクリックされたら
$("#g-nav a").click(function () {
	//ボタンの activeクラスを除去し
	$(".openbtn1").removeClass('active');
	//ナビゲーションのpanelactiveクラスを除去
	$("#g-nav").removeClass('panelactive');
	//丸背景のcircleactiveクラスを除去
	$(".circle-bg").removeClass('circleactive');
});


$('#ProfileBtn').click(function () {
	const IntroductionTop = $('#Profile').offset().top;
	$("html").animate({scrollTop: IntroductionTop});
});

$('#GameBtn').click(function () {
	const GameTop = $('#Game').offset().top;
	$("html").animate({scrollTop: GameTop});
});

$('#AccountBtn').click(function () {
	const AccountTop = $('#Account').offset().top;
	$("html").animate({scrollTop: AccountTop});
});

$('#GuidelinesBtn').click(function () {
	const GuidelinesTop = $('#Guidelines').offset().top;
	$("html").animate({scrollTop: GuidelinesTop});
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});


// ページ読み込み時にスクロール位置を復元
window.addEventListener('DOMContentLoaded', () => {
  const savedScrollPosition = sessionStorage.getItem('scrollPosition');
  if (savedScrollPosition !== null) {
    window.scrollTo(0, parseInt(savedScrollPosition, 10));
    sessionStorage.removeItem('scrollPosition'); // 復元後に消去
  }
});

// EN / JA 言語切替ボタンをクリックした時に現在のスクロール位置を保存
document.querySelectorAll('.lang-switch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  });
});

/*========= 3色（赤・黄・青）のスクロール追従パーティクル ===============*/
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  // ==========================================
  // ★ パラメータ調整
  // ==========================================
  const CONFIG = {
    count: 25,          // 玉の数
    minRadius: 20,       // 最小のサイズ (px)
    maxRadius: 60,      // 最大のサイズ (px)
    speed: 0.2,         // 動くスピード
    opacity: 0.3       // 透明度（0.0〜1.0）
  };

  let width, height;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight
    );
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // 赤・黄・青の3色定義（透明度は CONFIG.opacity を使用）
 const colors = [
    `rgba(240, 128, 128, ${CONFIG.opacity})`, /* 淡いピンクレッド */
    `rgba(244, 194, 110, ${CONFIG.opacity})`, /* 淡いクリームイエロー */
    `rgba(125, 175, 225, ${CONFIG.opacity})`  /* 淡いスカイブルー */
  ];

  const particles = [];

  // 設定された玉の数（CONFIG.count）だけ生成
  for (let i = 0; i < CONFIG.count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * CONFIG.speed,
      vy: (Math.random() - 0.5) * CONFIG.speed,
      // CONFIG.minRadius 〜 CONFIG.maxRadius の間でランダムな大きさに指定
      radius: Math.random() * (CONFIG.maxRadius - CONFIG.minRadius) + CONFIG.minRadius,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    requestAnimationFrame(animate);
  }

  animate();
});