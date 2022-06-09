// carrossel de carros pagina de locação
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
	constructor(container, items, controls) {
		this.carouselContainer = container;
		this.carouselControls = controls;
		this.carouselArray = [...items];
	}

	// Update css classes for gallery
	updateGallery() {
		this.carouselArray.forEach(el => {
			el.classList.remove('gallery-item-1');
			el.classList.remove('gallery-item-2');
			el.classList.remove('gallery-item-3');
			el.classList.remove('gallery-item-4');
			el.classList.remove('gallery-item-5');
		});

		this.carouselArray.slice(0, 5).forEach((el, i) => {
			el.classList.add(`gallery-item-${i + 1}`);
		});
	}

	// Update the current order of the carouselArray and gallery
	setCurrentState(direction) {

		if (direction.className == 'gallery-controls-previous') {
			this.carouselArray.unshift(this.carouselArray.pop());
		} else {
			this.carouselArray.push(this.carouselArray.shift());
		}
		this.updateGallery();
	}

	// Construct the carousel navigation
	// setNav() {
	// galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';

	// this.carouselArray.forEach(item => {
	//   const nav = galleryContainer.lastElementChild;
	//   nav.appendChild(document.createElement('li'));
	// }); 
	// }s

	// Construct the carousel controls
	setControls() {
		this.carouselControls.forEach(control => {
			galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;

			document.querySelector(`.gallery-controls-${control}`).innerText = control;
		});
	}

	// Add a click event listener to trigger setCurrentState method to rearrange carousel
	useControls() {
		const triggers = [...galleryControlsContainer.childNodes];

		triggers.forEach(control => {
			control.addEventListener('click', e => {
				e.preventDefault();

				if (control.className == 'gallery-controls') {
					// const newItem = document.createElement('img');
					const latestItem = this.carouselArray.length;
					const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length) + 1;

					// Assign the necessary properties for new gallery item
					// Object.assign(newItem,{
					//   className: 'gallery-item',
					//   src: `../img/${this.carouselArray.length+1}`
					// });
					// newItem.setAttribute('data-index', this.carouselArray.length+1);

					// // Then add it to the carouselArray and update the gallery
					// this.carouselArray.splice(latestIndex, 0, newItem);
					// document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
					// this.updateGallery();

				} else {
					this.setCurrentState(control);
				}

			});
		});
	}
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
// exampleCarousel.setNav();
exampleCarousel.useControls();




// google maps
var x = document.getElementById("demo");
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	}
	else { x.innerHTML = "Geolocalização não é suportada nesse browser."; }
}

function showPosition(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon)
	mapholder = document.getElementById('mapholder')
	mapholder.style.height = '20rem';
	mapholder.style.width = '40rem';

	var myOptions = {
		center: latlon, zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
	};
	var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
	var marker = new google.maps.Marker({ position: latlon, map: map, title: "Você está Aqui!" });
}

function showError(error) {
	switch (error.code) {
		case error.PERMISSION_DENIED:
			x.innerHTML = "Usuário rejeitou a solicitação de Geolocalização."
			break;
		case error.POSITION_UNAVAILABLE:
			x.innerHTML = "Localização indisponível."
			break;
		case error.TIMEOUT:
			x.innerHTML = "O tempo da requisição expirou."
			break;
		case error.UNKNOWN_ERROR:
			x.innerHTML = "Algum erro desconhecido aconteceu."
			break;
	}
}


//   classificação de avaliação
function Avaliar(estrela) {
 var url = window.location;
 url = url.toString()
 url = url.split("index.html");
 url = url[0];

 var s1 = document.getElementById("s1").src;
 var s2 = document.getElementById("s2").src;
 var s3 = document.getElementById("s3").src;
 var s4 = document.getElementById("s4").src;
 var s5 = document.getElementById("s5").src;
 var avaliacao = 0;

if (estrela == 5){ 
 if (s5 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star1.png";
 avaliacao = 5;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 4;
}}
 
 //ESTRELA 4
if (estrela == 4){ 
 if (s4 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star1.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 4;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 3;
}}

//ESTRELA 3
if (estrela == 3){ 
 if (s3 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star1.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 3;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 2;
}}
 
//ESTRELA 2
if (estrela == 2){ 
 if (s2 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star1.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 2;
 } else {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star0.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 1;
}}
 
 //ESTRELA 1
if (estrela == 1){ 
 if (s1 == url + "img/star0.png") {
 document.getElementById("s1").src = "img/star1.png";
 document.getElementById("s2").src = "img/star0.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 1;
 } else {
 document.getElementById("s1").src = "img/star0.png";
 document.getElementById("s2").src = "img/star0.png";
 document.getElementById("s3").src = "img/star0.png";
 document.getElementById("s4").src = "img/star0.png";
 document.getElementById("s5").src = "img/star0.png";
 avaliacao = 0;
}}
 
 document.getElementById('rating').innerHTML = avaliacao;
 
}




// scroll button

function subirTela() {
    // window.scrollTo(0, 0); para subir rapidamente
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function botaoScroll() {
    if(window.scrollY <= 300) {
        document.querySelector('.scrollbutton').style.display = 'none';
    }else {
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', botaoScroll);
