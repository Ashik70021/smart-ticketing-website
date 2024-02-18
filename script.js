const seatQuality = 'Economoy';
const price = 550;
const dis15 = "NEW15";
let seat = 0;
let totalPrice=0;

const seats = document.querySelectorAll(".seat");
for(let i=0; i<seats.length; i++){
    const seat = seats[i];
    seat.addEventListener("click", function(){
        // increase seat number
        const seatIncrease = getElementById("current-seat-number");
        for(let j=0; j<=i; j++){
            seat++;
            seatIncrease = seat;
        }
        // console.log("clicked")
        const title = event.target.innerText;
        
        // appending title in the container
        const selectedSeat = document.getElementById("selected-seat");
        const p = document.createElement("p");
        p.innerText = title;
        selectedSeat.appendChild(p);

        const selectedClass = document.getElementById("selected-class");
        const p1 = document.createElement("p");
        p1.innerText = seatQuality;
        selectedClass.appendChild(p1);

        const ticketPrice = document.getElementById("ticket-price");
        const p2 = document.createElement("p");
        p2.innerText = price;
        ticketPrice.appendChild(p2);

        // calculate price
        totalPrice = 550 + totalPrice;
        const totalTicketPrice = document.getElementById("total-price");
        totalTicketPrice.innerText = totalPrice;
        
    });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    // get value from input
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement;
    // console.log(couponCode);

    if (couponCode === "NEW15") {
        const discountAmount = totalPrice * 0.15;
        const discountedPrice = totalPrice - discountAmount;

        document.getElementById("discount-price").innerText= discountedPrice;  
        document.getElementById("input-field").value ="";
    }
    else if(couponCode === "Couple 20"){
        const discountAmount = totalPrice * 0.2;
        const discountedPrice = totalPrice - discountAmount;

        document.getElementById("discount-price").innerText= discountedPrice; 
        document.getElementById("input-field").value ="";
    }
    else {
        alert("Invalid Coupon code");
        document.getElementById("input-field").value ="";
    }
});

