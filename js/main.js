const hero_text = document.querySelector("#hero_text");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
    //document.body.style.setProperty('--scroll', scroll);

    if (scroll < 0.5) hero_text.innerHTML = "Moin Moin";
    else if (scroll > 0.50) hero_text.innerHTML = "Tschüssi";
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(element => element.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skills = document.querySelectorAll('.skills__name')
for (const skill of skills.values()) {
    const skillBar = skill.parentElement.nextElementSibling.firstElementChild
    skillBar.style.width = skill.nextElementSibling.textContent
}

const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    const itemClassName = this.parentNode.className

    if (itemClassName === 'skills__content skills__open') {
        return this.parentNode.className = 'skills__content skills__close'
    } else {
        return this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach(element => {
    element.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]')
const tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal')
const modalButtons = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

const modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalButtons.forEach((modalButton, index) => {
    modalButton.addEventListener('click', () => modal(index))
})

modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
const swiperProfile = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/*==================== TESTIMONIAL ====================*/
const swiperPagination = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        }
    }
})

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        const actualMenu = document.querySelector(`.nav__menu a[href*=${sectionId}]`)
        if (actualMenu) {

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                actualMenu.classList.add('active-link')
            } else {
                actualMenu.classList.remove('active-link')
            }
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
        // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) nav.classList.add('scroll-header')
    else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark the class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    if (themeButton)
        themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
if (themeButton)
    themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
            // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })