function loaded(){
    const swiper = new Swiper('.swiper', {
                
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // 이벤트: 데스크탑에서 아래로 스크롤하면 헤더 색 변경
    document.onscroll = () => {
        if (window.innerWidth > 1024){
            if (document.documentElement.scrollTop >= 100){
                document.querySelector('.top_header_bg').setAttribute('style', 'background-color: white; box-shadow: 0px 3px 3px lightgray;');
                document.querySelector('.top_header>#logo>img').setAttribute('src', './image/logo.svg');
                document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: black;'));
            }
            if (document.documentElement.scrollTop == 0){
                document.querySelector('.top_header_bg').setAttribute('style', 'background-color: none; box-shadow: none;');
                document.querySelector('.top_header>#logo>img').setAttribute('src', './image/logo_white.svg');
                document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: white;'));
            }
        }
    };
    // 이벤트: 햄버거버튼 클릭시 드로워 열기
    document.querySelector('.top_header #btn_more').onclick = () => {
        document.querySelector('.top_header .drawer').setAttribute('style', 'display: flex;');
    };
    // 이벤트: X버튼 클릭시 드로워 닫기
    document.querySelector('.top_header #btn_drawer_close').onclick = () => {
        document.querySelector('.top_header .drawer').setAttribute('style', 'display: none');
    }
    // 이벤트: 드로워 내부 서브메뉴 열기
    document.querySelector('.top_header #drawer_product').onclick = () => {
        document.querySelector('.top_header #drawer_product>ul').setAttribute('style', 'display: block')
    }
    document.querySelector('.top_header #drawer_more').onclick = () => {
        document.querySelector('.top_header #drawer_more>ul').setAttribute('style', 'display: block')
    }
}