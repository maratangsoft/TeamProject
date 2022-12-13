function loaded(){
      // 이벤트: 데스크탑에서 아래로 스크롤하면 헤더 색 변경
      document.onscroll = () => {
            if (window.innerWidth > 1024){
                  if (document.documentElement.scrollTop >= 100){
                        document.querySelector('.top_header_bg').setAttribute('style', 'background-color: white;')
                        document.querySelector('.top_header>#logo>img').setAttribute('src', '../../image/logo.svg')
                        document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: black;'))
                  }
                  if (document.documentElement.scrollTop == 0){
                        document.querySelector('.top_header_bg').setAttribute('style', 'background-color: none;')
                        document.querySelector('.top_header>#logo>img').setAttribute('src', '../../image/logo_white.svg')
                        document.querySelectorAll('.top_header span').forEach(it => it.setAttribute('style', 'color: white;'))
                  }
            }
      }
      // 이벤트: 위로 버튼 누르면 부드럽게 스크롤
      document.querySelector('.btn_go_top').onclick = () => {
            if(window.pageYOffset > 0 ){
                  window.scrollTo({top:0, behavior:"smooth"});
            }
      };
}