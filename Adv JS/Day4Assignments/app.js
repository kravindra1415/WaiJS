
function validate() {
    //display error message as innerHTML of <p> with id =error

    let pin = document.getElementById('pin')
    let errorMessage = "";

    if (pin == " ") {
        errorMessage = "please enter a value"
    }
    else if (pin.validity.rangeUnderflow) {
        errorMessage = "value is too small"
    }
    else if (pin.validity.rangeOverflow) {
        errorMessage = "value is too large"
    }
    else {
        errorMessage = "pin is correct!!"
    }
    document.getElementById('error').innerHTML = errorMessage;
}
  // var checkPin = document.getElementById('pin');
    // if (!checkPin.checkValidity()) {
    //     document.getElementById('error').innerHTML = checkPin.validationMessage;
    // } else {
    //     document.getElementById("error").innerHTML = "pin is correct!!";
    // }