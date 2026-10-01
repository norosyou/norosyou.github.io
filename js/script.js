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


/*========= tsParticles（背景アニメーション） ===============*/
(async () => {
  await tsParticles.load("tsparticles", {
    fpsLimit: 60, // フレームレートを制限してスマホのバッテリー消費を防止
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse" // マウス/タップを近づけると粒子が逃げる
        },
        onClick: {
          enable: true,
          mode: "push" // タップすると新しい粒子が少し増える
        }
      },
      modes: {
        repulse: {
          distance: 120, // 逃げる距離
          duration: 0.4
        },
        push: {
          quantity: 3 // タップで増える個数
        }
      }
    },
    particles: {
      color: {
        value: "#1e293b" // サイトの文字・アクセントカラーに統一
      },
      links: {
        color: "#94a3b8", // 繋がる線の色
        distance: 140,
        enable: true, // 粒子同士を線で繋ぐ
        opacity: 0.25,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8, // ゆったり動かす
        direction: "none",
        outModes: {
          default: "bounce" // 画面端で跳ね返る
        }
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 25 // 粒子の数（25個に絞ることで超軽量化）
      },
      opacity: {
        value: 0.4
      },
      shape: {
        type: "circle" // 粒子の形（円）
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  });
})();

