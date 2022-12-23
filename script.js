function backspace(){

    let string  = document.getElementById('pinCode').value;

    document.getElementById('pinCode').value=string.substring(0,string.length -1);

}

function check(){

    let code = '1234';

    let userInput = document.getElementById('pinCode').value;

    if (userInput == code){

        window.location.href = 'page2.html';

    }else {
        window.alert("Please enter right Pin");
    }

}