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

$('#ContactBtn').click(function () {
	const ContactTop = $('#Contact').offset().top;
	$("html").animate({scrollTop: ContactTop});
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// モーダルを開く
function openGameModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('is-active');
        document.body.style.overflow = 'hidden'; // 背景のスクロールを固定
    }
}

// モーダルを閉じる
function closeGameModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('is-active');
        document.body.style.overflow = ''; // スクロール固定を解除
    }
}

// 背景部分（モーダル枠外）クリックで閉じる
function closeGameModalOuter(event, modalId) {
    if (event.target.id === modalId) {
        closeGameModal(modalId);
    }
}

// ESCキーを押したときにも閉じる
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModals = document.querySelectorAll('.game-modal.is-active');
        activeModals.forEach(modal => {
            closeGameModal(modal.id);
        });
    }
});

/*========= 言語切り替え時のスクロール位置の保存・復元（スマホ対応版） ===============*/
// 1. ページ読み込み時に復元
window.addEventListener('DOMContentLoaded', () => {
  const savedScrollPosition = sessionStorage.getItem('scrollPosition');
  
  if (savedScrollPosition !== null) {
    const scrollY = parseInt(savedScrollPosition, 10);
    // iOS Safari対策: 少しだけ遅延させてレンダリング完了後にスクロールを実行
    setTimeout(() => {
      window.scrollTo(0, scrollY);
      sessionStorage.removeItem('scrollPosition');
    }, 10);
  }
});

// スクロール位置を保存する処理
function saveScrollPos() {
  // 0より大きい場合のみ保存（画面一番上への誤上書きを防ぐ）
  if (window.scrollY > 0) {
    sessionStorage.setItem('scrollPosition', window.scrollY);
  }
}

// 2. スマホ（touchstart）とPC（click）の両方で位置を記憶
document.addEventListener('touchstart', (e) => {
  if (e.target.closest('.lang-switch-btn')) saveScrollPos();
}, { passive: true });

document.addEventListener('click', (e) => {
  if (e.target.closest('.lang-switch-btn')) saveScrollPos();
});

// 3. ページを離れる直前（遷移時）にも念のため保存
window.addEventListener('pagehide', () => {
  // クリック直後に保存が漏れてもここでバックアップ
  const isLangClick = sessionStorage.getItem('langButtonClicked');
  if (isLangClick) {
    saveScrollPos();
    sessionStorage.removeItem('langButtonClicked');
  }
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
    count: 35,          // 玉の数
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
      color: colors[i % colors.length]
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