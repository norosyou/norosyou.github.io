//ボタンがクリックされたら
$(".openbtn1").click(
	function ()
	{
		//ボタン自身に activeクラスを付与し
		$(this).toggleClass('active');
		//ナビゲーションにpanelactiveクラスを付与
		$("#g-nav").toggleClass('panelactive');
	}
);

//ナビゲーションのリンクがクリックされたら
$("#g-nav a").click(
	function () 
	{
		//ボタンの activeクラスを除去し
		$(".openbtn1").removeClass('active');
		//ナビゲーションのpanelactiveクラスも除去
		$("#g-nav").removeClass('panelactive');
});