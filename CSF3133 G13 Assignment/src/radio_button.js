function change(radio) {
    if (radio.checked && radio.id === "radio-restaurant") {
        document.getElementById("button").innerHTML = "<a href='./restaurant.html'>Submit</a>";
    } else {
        document.getElementById("button").innerHTML = "<a href='./hotel.html'>Submit</a>"
    }
}