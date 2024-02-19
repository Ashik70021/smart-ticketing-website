const seatQuality = 'Economoy';
const price = 550;
const dis15 = 'NEW15';
let seatCount = 0;
let totalPrice = 0;
let selectedSeats = [];

const seats = document.querySelectorAll('.seat');
for (let i = 0; i < seats.length; i++) {
	const seat = seats[i];
	seat.addEventListener('click', function () {
		
		const title = event.target.innerText;

		// stop execution if already exists
		if (selectedSeats.includes(title)) {
			selectedSeats = selectedSeats.filter((seat) => seat !== title);
			seat.classList.remove('!bg-[#1DD100]');
			seatCount--;
			const remainingSeats = 40 - seatCount;
			const seatNumber = document.getElementById('seat_left');
			seatNumber.innerText = remainingSeats;

			const currentSeatElem = document.getElementById('current-seat-number');
			currentSeatElem.innerText = seatCount;

			const selectedSeatList = document.getElementById('selected-seat');
			const selectedSeat = document.getElementById('seat_' + title);
			selectedSeatList.removeChild(selectedSeat);

			const selectedClassList = document.getElementById('selected-class');
			const selectedClass = document.getElementById('class_' + title);
			selectedClassList.removeChild(selectedClass);
			const ticketPriceList = document.getElementById('ticket-price');
			const selectedTicket = document.getElementById('price_' + title);
			ticketPriceList.removeChild(selectedTicket);

			totalPrice = totalPrice - 550;
			const totalTicketPrice = document.getElementById('total-price');
			totalTicketPrice.innerText = totalPrice;

			const discountAmount = totalPrice * 0.15;
			const discountedPrice = totalPrice - discountAmount;

			document.getElementById('discount-price').innerText = discountedPrice;
			return;
		}
        if (seatCount >= 4) return;
		seat.classList.add('!bg-[#1DD100]');

		// updating remaining seats
		seatCount++;
		const remainingSeats = 40 - seatCount;
		const seatNumber = document.getElementById('seat_left');
		seatNumber.innerText = remainingSeats;

		const currentSeatElem = document.getElementById('current-seat-number');
		currentSeatElem.innerText = seatCount;

		// appending title in the container
		const selectedSeat = document.getElementById('selected-seat');
		const p = document.createElement('p');
		p.id = 'seat_' + title;
		p.innerText = title;
		selectedSeat.appendChild(p);
		selectedSeats.push(title);

		const selectedClass = document.getElementById('selected-class');
		const p1 = document.createElement('p');
		p1.innerText = seatQuality;
		p1.id = 'class_' + title;
		selectedClass.appendChild(p1);

		const ticketPrice = document.getElementById('ticket-price');
		const p2 = document.createElement('p');
		p2.innerText = price;
		p2.id = 'price_' + title;
		ticketPrice.appendChild(p2);

		// calculate price
		totalPrice = 550 + totalPrice;
		const totalTicketPrice = document.getElementById('total-price');
		totalTicketPrice.innerText = totalPrice;
	});
}

const btn = document.getElementById('apply-btn');
btn.addEventListener('click', function () {
	// get value from input
	const couponElement = document.getElementById('input-field').value;
	const couponCode = couponElement;
	// console.log(couponCode);

	if (couponCode === 'NEW15') {
		const discountAmount = totalPrice * 0.15;
		const discountedPrice = totalPrice - discountAmount;

		document.getElementById('discount-price').innerText = discountedPrice;
		const couponSecion = document.getElementById('coupon_section');
		couponSecion.remove();
	} else if (couponCode === 'Couple 20') {
		const discountAmount = totalPrice * 0.2;
		const discountedPrice = totalPrice - discountAmount;

		document.getElementById('discount-price').innerText = discountedPrice;
		const couponSecion = document.getElementById('coupon_section');
		couponSecion.remove();
	} else {
		alert('Invalid Coupon code');
		document.getElementById('input-field').value = '';
	}
});

const continueButton = document.getElementById('continue-button');
continueButton.addEventListener('click', function(){
    location.reload();
});

// const nextButton = document.getElementById('next-btn');
// nextButton.disabled = true;
// const input = document.getElementsByClassName('user-input');
// if(input.value.length>0 && selectedSeats.length>0){
//     nextButton.disabled = false;
// }
// nextButton.addEventListener('onclick', function(){
//     my_modal_5.showModal();
// })

