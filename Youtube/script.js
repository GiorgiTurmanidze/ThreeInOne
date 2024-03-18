function showDeleteSearch() {
    var textInput = document.querySelector('.searchButton')
    var deleteText = document.querySelector('.deleteText')
    var limit = 1

    if(textInput.value.length >= limit) {
        deleteText.classList.add('showDeleteButton')
    } else {
        deleteText.classList.remove('showDeleteButton')
    }
}

function deleteText() {
    var input = document.querySelector('.searchButton')
    var deleteButton = document.querySelector('.deleteText')
    input.value = ''
    deleteText.classList.remove('showDeleteButton')
}

function makeBorderBlue() {
    var button = document.querySelector('.searchButton')

    if ((button.classList.contains('makeBorderBlue'))) {
        button.classList.remove('makeBorderBlue')
    } else {
        button.classList.add('makeBorderBlue')
    }
}

function removeBorderBlue() {
    var button = document.querySelector('.searchButton')

    if ((button.classList.contains('makeBorderBlue'))) {
        button.classList.remove('makeBorderBlue')
    } else {
        button.classList.add('makeBorderBlue')
    }
}


setInterval(showDeleteSearch, 1);

function showNotifications() {
    var hiddenBox = document.querySelector('.slideNotify')
    var profileMenu = document.querySelector('.slideProfile')

    if (hiddenBox) {
        if (hiddenBox.style.display === 'none' || hiddenBox.style.display === '') {
            hiddenBox.style.display = 'flex'
            profileMenu.style.display = 'none'
        } else {
            hiddenBox.style.display = 'none'
        }
    }
} 

function showProfileMenu() {
    var hiddenBox = document.querySelector('.slideNotify')
    var profileMenu = document.querySelector('.slideProfile')

    if (profileMenu) {
        if (profileMenu.style.display === 'none' || profileMenu.style.display === '') {
            profileMenu.style.display = 'flex'
            hiddenBox.style.display = 'none'
        } else {
            profileMenu.style.display = 'none'
        }
    }
}

function showLeftMenu() {
    var leftBarBefore = document.querySelector('.leftBarBefore')
    var leftBarAfter = document.querySelector('.leftBarAfter')

    if (leftBarAfter) {
        if (leftBarAfter.style.display === 'none' || leftBarAfter.style.display === '') {
            leftBarBefore.style.display = 'none'
            leftBarAfter.style.display = 'flex'
        } else {
            leftBarBefore.style.display = 'block'
            leftBarAfter.style.display = 'none'
        }
    } 
}