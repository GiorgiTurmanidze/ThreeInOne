function makeBorderOrange() {
    const input = document.querySelector('.searchTab')

    if (input) {
        if (input.style.border !== '2px solid #F38730') {
            input.style.border = '2px solid #F38730'
        }
    }
}

function makeBorderBack() {
    const input = document.querySelector('.searchTab')

    if (input) {
        input.style.border = '1px solid rgba(176, 176, 176, 0.442)'
    }
}