const hamburgerControls = document.querySelectorAll('.hamburger-control')

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

/**
 * To make something visible or not for devices smaller than 575px
 */

// if (window.innerWidth < 768) {
//     .classList.add('display-none')
// } else {
//     .classList.remove('display-none')
// }
