const orderFirst = document.querySelectorAll('.sm-order-first');
const x = window.matchMedia('(max-width: 768px)');

function order(x) {
	if(x.matches){
		orderFirst.forEach(element =>{
			element.classList.add('order-first');
		});
	}else{
		orderFirst.forEach(element =>{
			element.classList.remove('order-first');
		});
	}
}

order(x);
x.addListener(order);
