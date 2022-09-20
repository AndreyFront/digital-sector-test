// import Swiper from 'swiper'
// import IMask from 'imask'
// import validator from 'validator'
// https://addmorescripts.github.io/hystModal/index_ru.html

window.onload = () => {
    function productSlider() {
        const main = document.querySelector('[data-product-slider="main"]')

        if (!main) return

        const sliderMain = main.querySelector('[data-product-slider="slider-main"]')
        const pagination = main.querySelector('[data-product-slider="pagination"]')
        const sliderThumbs = main.querySelector('[data-product-slider="slider-thumbs"]')

        const slidesThumbs = sliderThumbs.querySelectorAll('.swiper-slide')

        const swiperThumbs = new Swiper(sliderThumbs, {
            slidesPerView: 5,
            freeMode: true,
            allowTouchMove: false,
            watchSlidesProgress: true,
        })

        const swiperMain = new Swiper(sliderMain, {
            spaceBetween: 15,
            thumbs: {
                swiper: swiperThumbs,
            },
            pagination: {
                el: pagination,
                clickable: true
            }
        })

        if (slidesThumbs.length) {
            slidesThumbs.forEach((slide, index) => {
                slide.addEventListener('mousemove', () => {
                    console.log(slide)
                    swiperMain.slideTo(index, 400, true)
                })
            })
        }
    }

    function select() {
        const select = document.querySelectorAll('[data-select="select"]')

        if (!select.length) return

        document.addEventListener('click', (event) => {
            const el = event.target

            if (el.closest('[data-select="select"]')) {
                const select = el.closest('[data-select="select"]')
                const title = select.querySelector('[data-select="title"]')
                const titleContent = title.textContent
                
                if (el.closest('[data-select="block-title"]')) {
                    select.classList.toggle('active')
                }

                if (el.closest('[data-select="list"] > li')) {
                    const li = el.closest('[data-select="list"] > li')
                    const liContent = li.textContent
                    title.textContent = liContent
                    li.textContent = titleContent
                    select.classList.remove('active')
                }
            } else {
                select.forEach(elSelect => {
                    elSelect.classList.remove('active')
                })
            }
        })
    }

    function favouritesLabel() {
        const main = document.querySelectorAll('[data-favourites-label="main"]')

        if (!main.length) return

        document.addEventListener('click', (event) => {
            const el = event.target
            if (el.closest('[data-favourites-label="main"]')) {
                const main = el.closest('[data-favourites-label="main"]')
                main.classList.toggle('active')
            }
        })
    }
    
    function media() {
        const lables = document.querySelector('.lables')
        if (window.matchMedia("(max-width: 1200px)").matches) {
            if (lables) {
                const clonedNode = lables.cloneNode(true);
                const wrapperDescription = document.querySelector('.main-page__wrapper-description')

                if (wrapperDescription) {
                    wrapperDescription.appendChild(clonedNode)
                    lables.remove()
                }
            }
        }

        const wrapperDescription = document.querySelector('.main-page__wrapper-description')
        if (window.matchMedia("(max-width: 700px)").matches) {
            if (wrapperDescription) {
                const clonedNode = wrapperDescription.cloneNode(true);
                const mainContainer = document.querySelector('.main-page > .main-container')

                if (mainContainer) {
                    mainContainer.appendChild(clonedNode)
                    wrapperDescription.remove()
                }
            }
        }
    }

    productSlider()
    select()
    favouritesLabel()
    media()
}