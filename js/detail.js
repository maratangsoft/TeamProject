function loaded(){
      // 이벤트: 데스크탑에서 아래로 스크롤하면 헤더 색 변경
      document.onscroll = () => {
            if (window.innerWidth > 1024){
                  if (document.documentElement.scrollTop >= 100){
                        document.querySelector('.top_header_bg').setAttribute('style', 'background-color: white; box-shadow: 0px 3px 3px lightgray;');
                        document.querySelector('.top_header>#logo>img').setAttribute('src', '../image/logo.svg');
                        document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: black;'));
                  }
                  if (document.documentElement.scrollTop == 0){
                        document.querySelector('.top_header_bg').setAttribute('style', 'background-color: #f7323f; box-shadow: none;');
                        document.querySelector('.top_header>#logo>img').setAttribute('src', '../image/logo_white.svg');
                        document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: white;'));
                  }
            }
      };
      // 이벤트: 햄버거버튼 클릭시 드로워 열기
      document.querySelector('.top_header #btn_more').onclick = () => {
            document.querySelector('#header_drawer').setAttribute('style', 'display: flex;');
      };
      // 이벤트: X버튼 클릭시 드로워 닫기
      document.querySelector('#header_drawer #btn_drawer_close').onclick = () => {
            document.querySelector('#header_drawer').setAttribute('style', 'display: none');
      };
      // 이벤트: 드로워 내부 서브메뉴 열기
      document.querySelector('#header_drawer #drawer_product').onclick = () => {
            document.querySelector('#header_drawer #drawer_product>ul').setAttribute('style', 'display: block')
      };
      document.querySelector('#header_drawer #drawer_more').onclick = () => {
            document.querySelector('#header_drawer #drawer_more>ul').setAttribute('style', 'display: block')
      };
      // 이벤트: 위로 버튼 누르면 부드럽게 스크롤
      document.querySelector('.btn_go_top').onclick = () => {
            if(window.pageYOffset > 0 ){
                  window.scrollTo({top:0, behavior:"smooth"});
            }
      };
      // 스와이퍼 초기화 데스크탑/모바일
      let swiper = undefined;
      if (window.innerWidth > 1024){
            swiper = new Swiper('.swiper', {
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  slidesPerView: 4,
                  spaceBetween: 10,
                });
      }else{
            swiper = new Swiper('.swiper', {
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  slidesPerView: 1,
                });
      }
      //화면크기 변경시 스와이퍼 변경
      window.onresize = () => {
            if (window.innerWidth > 1024){
                  swiper = new Swiper('.swiper', {
                        navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                        },
                        slidesPerView: 4,
                        spaceBetween: 10,
                      });
            }else{
                  swiper = new Swiper('.swiper', {
                        navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                        },
                        slidesPerView: 1,
                      });
            }
      }
      //이벤트: 스와이퍼 클릭시 큰 뷰어 이미지 변경
      swiper.on('click', () => {
            console.log('slide changed');
          });

      //이벤트: 탭 클릭시 색상 변경
      let firstTab = document.querySelector('#tab>ul :nth-child(1)');
      let secondTab = document.querySelector('#tab>ul :nth-child(2)');
      let thirdTab = document.querySelector('#tab>ul :nth-child(3)');
      let prevTab = firstTab;

      firstTab.onclick = () => {
            if (prevTab != firstTab){
                  firstTab.setAttribute('style', 'color: #ff0055; border-bottom: 3px solid #ff0055');
                  prevTab.setAttribute('style', 'color: gray; border-bottom: 1px solid lightgray');
                  prevTab = firstTab;
            }
      };
      secondTab.onclick = () => {
            if (prevTab != secondTab){
                  secondTab.setAttribute('style', 'color: #ff0055; border-bottom: 3px solid #ff0055');
                  prevTab.setAttribute('style', 'color: gray; border-bottom: 1px solid lightgray');
                  prevTab = secondTab;
            }
      };
      thirdTab.onclick = () => {
            if (prevTab != thirdTab){
                  thirdTab.setAttribute('style', 'color: #ff0055; border-bottom: 3px solid #ff0055');
                  prevTab.setAttribute('style', 'color: gray; border-bottom: 1px solid lightgray');
                  prevTab = thirdTab;
            }
      };
}