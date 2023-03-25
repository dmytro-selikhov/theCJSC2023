'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// 🚨 The base URL of the API used throughout this section has changed

// It's not a big deal, it's really just one small change. Instead of:

// https://restcountries.eu/rest/v2/

// It's now:
// https://restcountries.com/v2/

// So whenever we use the Countries API in this section, please just change the URL you see in the videos to this new one.

// Happy learning ✌️

// https://restcountries.com/v2/



////////////////////////////////////////////
const getCountryData = function(country){


	const request = new XMLHttpRequest();
	request.open('GET', `https://restcountries.com/v2/name/${country}`)
	request.send();

	request.addEventListener('load', function(){
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const html = `
		<article class="country">
		     <img class="country__img" src="${data.flag}" />
		     <div class="country__data">
		     	<h3 class="country__name">${data.name}</h3>
		     	<h4 class="country__region">${data.region}</h4>
		    	 <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
			     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
			     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
		     </div>
	    </article>
		`;

		countriesContainer.insertAdjacentHTML('beforeend', html);
		countriesContainer.style.opacity = 1;
	});

};

getCountryData('portugal');
getCountryData('usa');
getCountryData('ukraine');



