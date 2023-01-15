const hamburgerControls = document.querySelectorAll('.hamburger-control')
const hamburgerOpen = document.querySelector('.fa-bars')
const hamburgerClose = document.querySelector('.fa-x')

/**
 * To make something visible or not for devices smaller than 575px
 */

hamburgerControls.forEach((hamburgerControl) => {
    if (window.innerWidth > 575) {
        hamburgerControl.classList.add('display-none')
    } else {
        hamburgerControl.classList.remove('display-none')
    }
})

hamburgerOpen.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    hamburgerOpen.classList.add('display-none')
    hamburgerClose.classList.remove('display-none')
})

hamburgerClose.addEventListener('click', () => {
    navigationLinks.classList.toggle('display-none')
    hamburgerOpen.classList.remove('display-none')
    hamburgerClose.classList.add('display-none')
})

const chevronMenu = document.querySelector('.fa-chevron-down')
const dropDownMenu = document.querySelector('.smaller-menu-items')

chevronMenu.addEventListener('click', () => {
    dropDownMenu.classList.remove('display-none')

    if (!dropDownMenu.classList.contains('display-none')) {
        chevronMenu.addEventListener('click', () => {
            dropDownMenu.classList.toggle('display-none')
        })
    }
})
