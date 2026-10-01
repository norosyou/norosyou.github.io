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


/*========= 自作・超軽量背景アニメーション ===============*/
window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  // 画面リサイズ対応
  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 粒子の作成（スマホ用に数を15個に抑えて超軽量化）
  const particles = [];
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, // X方向の速度
      vy: (Math.random() - 0.5) * 0.5, // Y方向の速度
      radius: Math.random() * 2 + 1     // 粒子の大きさ
    });
  }

  // 描画ループ
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 粒子の描画と移動
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      // 画面端で跳ね返る
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // 点を描画
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(30, 41, 59, 0.3)'; // サイトのメインカラー (#1e293b)
      ctx.fill();

      // 粒子同士を結ぶ線を描画
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${0.2 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
});
