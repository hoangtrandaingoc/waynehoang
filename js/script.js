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




//animation for list skill

const skill = document.getElementById("skill");
let current = true;
const crt_skill = skill.offsetTop - 450;

window.addEventListener('scroll',function(){
  if(window.pageYOffset > crt_skill){
	if(current == true){
	  current = false;
	  skill.classList.add("myAnimation")
	}
  }
  else if(window.pageYOffset < crt_skill ){
	if(current == false){
	  current = true;
	  skill.classList.remove('myAnimation')
	}
  }
})



// toggle icon

const icon1 = document.getElementById('icon1');
const icon2 = document.getElementById('icon2');
console.log(icon2);

icon1.onclick = function(){
    icon1.classList.add('hidden_icon1');
    icon2.classList.add('block_icon2')
}

icon2.onclick = function(){
    icon2.classList.remove('block_icon2');
    icon1.classList.remove('hidden_icon1');

}