var str = "ggggggggxkljfvlsjkfg";

function firstRepeat(str){
	for (var i = 1; i < str.length; i++){
		if (str[i] !== str[i-1]){
			console.log(str[i]);
			break;
		}
	}
}

firstRepeat(str);
firstRepeat("jjjjjlmnasdnvoi");