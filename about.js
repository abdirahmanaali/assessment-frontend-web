console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const img = document.querySelector('img')
img.addEventListener('mouseover',()=> alert(`you're cool`))