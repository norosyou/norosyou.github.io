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

$('#IntroductionBtn').click(function () {
	const IntroductionTop = $('#Introduction').offset().top;
	$("html").animate({scrollTop: IntroductionTop});
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

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});
