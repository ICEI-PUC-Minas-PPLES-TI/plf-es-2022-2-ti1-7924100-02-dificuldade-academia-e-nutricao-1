        /* JavaScrpit para botão de carregar mais */

        const loadmore = document.querySelector('.load-more');

        let currentItems = 1
        loadmore.addEventListener('click', (e) => {
            const elementList = [...document.querySelectorAll('.card')];
            e.target.classList.add('show-loader');
        
            for (let i = currentItems; i < currentItems + 1; i++) {
                setTimeout(function () {
                    e.target.classList.remove('show-loader');
                    if (elementList[i]) {
                        elementList[i].style.display = 'flex';
                    }
                }, 1000)
            }
            currentItems += 1;
        
            //esconder botão de carregamento depois de carregar por completo
            if (currentItems >= elementList.length) {
                event.target.classList.add('loaded')
            }
        })

