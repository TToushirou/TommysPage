console.log('HELLO');

const test = () => {
	console.log('this is a test');
};

let path = document.querySelector(".path");

console.log(path.getAttribute('d'))

function lerp(start, end, t){
    return start * (1 - t) + end * t;
}

let toggle = false;

let menuToggle = document.querySelector('.nav__tog');
let navWrapper = document.querySelector('.nav__wrapper');
menuToggle.addEventListener('click', () => {
    setTimeout(() => {
        toggle = !toggle;
       
    }, 300);

	if(toggle){
		navWrapper.classList.remove('active');
	} else {
		setTimeout(() => {
			navWrapper.classList.add('active');
		   
		}, 300);
	}

	menuToggle.classList.toggle('active');

});

