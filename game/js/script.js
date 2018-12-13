$(function(){
	var text
	function aa() {
		var txt = prompt("답이 뭘까?", text);
		if(txt=='7'){
			alert('오 풀었네? 다음으로 넘어가볼까?')
			location.href="./index2.html"
		}else if(txt !='7'){
			alert('잘 보고 눌러줘. 힌트는 너가 충분히 누르고 있어.')
		}
	}
	$('.btn').click(aa)
			});
	