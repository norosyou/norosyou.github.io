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