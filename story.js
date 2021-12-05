    let button = document.getElementsByClassName('send-button');
    let input = document.getElementByClassName("input");

    function removeInput () {
        input.value = "";
        }

    button.addEventListener("click", addListItem);