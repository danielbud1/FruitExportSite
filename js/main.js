document.getElementById('hamburger-menu').addEventListener('click', function() {
        var nav = document.getElementById('navigation');
        nav.classList.toggle('show');
});
$(document).ready(function(){
    $('.carousel_inner').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1300,
        responsive: [
            {
              breakpoint: 1197,
              settings: "unslick"
            },
        ],
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>'
    });
});

function validation(form) {

    function removeError(input) {
        const parent = input.parentNode;

        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')

        errorLabel.classList.add('error-label')
        errorLabel.textContent = text

        parent.classList.add('error')

        parent.append(errorLabel)
    }


    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

        removeError(input)

        if (input.dataset.required == "true") {
            if (input.value == "") {
                removeError(input)
                createError(input, 'Невірний формат введення')
                result = false
            }
        }

    }

    return result
}


document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()

    if (validation(this) == true) {
        document.getElementById('text').style.visibility = 'visible';
    }

})