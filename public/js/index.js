let submit = document.querySelector('.rating__submit')
let rating = document.querySelector('.rating__rate')
let card = document.querySelector('.rating')
let buttons = document.querySelectorAll('.rating__number')
var rate = '0'

// For each button, on click
// Remove other 'selected' classes
// Add 'selected' to the clicked button
// Store the rate value
// Enable submit button if it has been disabled

buttons.forEach((element) => {
	element.addEventListener('click', () => {
		buttons.forEach((element) => {
			element.classList.remove('selected')
		})
		element.classList.add('selected')
		rate = element.value
		submit.innerHTML = 'submit'
		submit.classList.remove('disabled')
	})
})

// When click on submit, execute the function
submit.addEventListener('click', () => {
	submitted()
})

// When submit is clicked,
// check if a rate have been selected
// change rating sentence
// the turn the card
function submitted() {
	if (rate != 0) {
		rating.innerHTML = 'You selected ' + rate + ' out of 5'
		card.classList.add('turned')
	} else {
		submit.innerHTML = 'please select a rate first!'
		submit.classList.add('disabled')
	}
}

// when the page load, reveal the card
window.onload = function () {
	card.classList.add('visible')
}
