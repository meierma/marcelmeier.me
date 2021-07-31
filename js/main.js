const hero_text = document.querySelector("#hero_text");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
    document.body.style.setProperty('--scroll', scroll);

    if (scroll < 0.5) hero_text.innerHTML = "Moin Moin";
    else if (scroll > 0.5) hero_text.innerHTML = "Tschüssi";
});

/*==================== ACCORDION SKILLS ====================*/
const skills = document.querySelectorAll('.skills__name')
for (const skill of skills.values()) {
    let skillBar;
    if(skill.parentElement.nextElementSibling)
        if(skillBar = skill.parentElement.nextElementSibling.firstElementChild)
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

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)