$(function(){

// #div1をdrag可能に
 $(".dragDiv").draggable();

// .boxは横方向のみ動かせます
$(".box3").draggable({ axis: "x" });

$(".dropAfter").hide();

$( ".dastBox" ).droppable({
  accept : ".dragDiv" , 
  drop : function(event , ui){ 
  	console.log("ドロップされました");


  }
});


//ドロップ後に表示するdiv(.fadeInDiv)を非表示にする。
//.dragDivを dragし、
//.dastBoxに dropした時、
//dropした　.dragDivは、フェードアウト 非表示 処理をおこなう。
//dropしたdivと同じ番号の

//.dastBoxはDrop領域
//.box4を受け入れます
//ドロップされた時、以下の動作を行う

////////////////////////////////////////////
//画像を二枚用意して、potision設定し、ビフォーを下、アフターを上で用意
///////////////////////////////////////////


//bounce処理
$(".box1").click(function(){
	$(".box2").effect('bounce');
});
//.box1をクリックした時
//.box2を弾ませる エフェクト　処理を行う



/////////////////////////////////////////////////

//  dragされてきたオブジェクトを取得してクローン作製

	// 		var dragId = ui.draggable.attr("id");
				//変数 dragIdは、ドラックされた要素のIdです。(またはidを取得します？？？)

	// 		if($(this).find(".drop" + dragId).length == 0){
					//もし、これは　(.drop であり ドラックされたID) の　エレメント?を保持?? (=が2個ある理由)

	// 			$(this).append('<span class="drop' + dragId +'">' + ui.draggable.text() + 'が置かれたよ</span>');
						//これ 追加する ( spanは、.dropであり、ドラッグされたIDです +最後の+の意味) と、ドラッグされた、(.dropの)テキスト<p>が置かれたよ　というspan要素

	// 		}
	// 	} ,
	// 	out : function (event , ui){
	// 		var dragId = ui.draggable.attr("id");
	// 		$(this).find(".drop" + dragId).remove();
	// 	}

	// });

});