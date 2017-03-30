var money = 236578234069;
var cash = 52515;
var plata = 7777888899990000;

function makeMoney(num){
	return "$" + (num / 100).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

console.log(makeMoney(plata));


//or


function formatMoney(num){
	num += "";
	num = num.split('').reverse();
	for (var i = 0; i < num.length; i++){
		if (i === 2){
			num[i] += ".";
		} else if([i - 2] % 3 === 0){
			num[i] += ','
		}
	}
	num.push("$");
	num = num.reverse('').join('');
	console.log(num);
}

formatMoney(money);

//or

function formMoney(num){
	return (num/100).toLocaleString('en-US', {style: "currency", currency: "USD"})
}

console.log(formMoney(cash));