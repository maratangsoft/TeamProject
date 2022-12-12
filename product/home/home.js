function loaded(){
      let filterBox = document.querySelector('.filter_box');
      let filterCities = document.querySelectorAll('.filter_city li');
      let filterCityChilds = document.querySelectorAll('.filter_city_child');

      document.querySelector('.filter_label').onmouseover = () => {
            filterBox.setAttribute('style', 'display: flex;');
      };
      // filterBox.onmouseout = () => {
      //       filterBox.setAttribute('style', 'display: none;');
      // };
      
      // 지역 필터에 마우스오버 이벤트 붙이기
      for (let i=0; i<filterCities.length; i++){
            filterCities[i].onmouseover = () => {
                  for (let j=0; j<filterCityChilds.length; j++){
                        filterCityChilds[j].setAttribute('style', 'display: none;');
                  }
                  filterCityChilds[i].setAttribute('style', 'display: block;');
            }
      }

      document.querySelector('.btn_go_top').onclick = () => {
            if(window.pageYOffset > 0 ){
                  //스무스하게 스크롤 하기 //어디까지 올라갈지 위치를 정한다. behavior 자연스럽게 이동.
                  window.scrollTo({top:0, behavior:"smooth"});
            }
      };
}
