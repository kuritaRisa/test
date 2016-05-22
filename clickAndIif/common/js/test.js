$(function(){
//console.log("test")


//offset()　は要素の座標を取得することができます。
//使い方は　offset().left で左　offset().top　で上が取得できます。


	$("li").click(function(){
		
		var num = $("li").index(this);
		var divLeft =  $(".box").eq(num).offset().left;
		if(divLeft == 0){
			$(".box").eq(num).animate({"left":"300px"},1500);
		}else{
			$(".box").eq(num).animate({"left":"0"},800);
		}	

	})

// リストをクリックした時
//クリックされたリストの値を取得
//クリックされたリストと同じ番号のボックスの、番号を取得し、左座標を取得します
//if　もし ボックスは0だったら(divLeft == 0)
//0だった場合、左に300px移動する
//そうではない(0ではない場合)
//ボックスは0に移動する


})

//いろんな値を習得する方法を覚える
//確認をしっかりこまめにする
//if()には◯◯か、そうではないかを入れる
