$(function(){
//console.log("test")


//offset()�@�͗v�f�̍��W���擾���邱�Ƃ��ł��܂��B
//�g�����́@offset().left �ō��@offset().top�@�ŏオ�擾�ł��܂��B


	$("li").click(function(){
		
		var num = $("li").index(this);
		var divLeft =  $(".box").eq(num).offset().left;
		if(divLeft == 0){
			$(".box").eq(num).animate({"left":"300px"},1500);
		}else{
			$(".box").eq(num).animate({"left":"0"},800);
		}	

	})

// ���X�g���N���b�N������
//�N���b�N���ꂽ���X�g�̒l���擾
//�N���b�N���ꂽ���X�g�Ɠ����ԍ��̃{�b�N�X�́A�ԍ����擾���A�����W���擾���܂�
//if�@���� �{�b�N�X��0��������(divLeft == 0)
//0�������ꍇ�A����300px�ړ�����
//�����ł͂Ȃ�(0�ł͂Ȃ��ꍇ)
//�{�b�N�X��0�Ɉړ�����


})

//�����Ȓl���K��������@���o����
//�m�F���������肱�܂߂ɂ���
//if()�ɂ́������A�����ł͂Ȃ���������
