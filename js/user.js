let loginEmail = '';    // 로그인한 유저 이메일
let loginNickname = ''; // 로그인한 유저 닉네임

function emailCheck(){
      //input요소에 입력한 값 받아오기
      let inputEmail = document.querySelector('#email').value;

      //TODO: 유효성 검사

      //서버 작업 설계
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                  //응답 받아오면 처리할 작업
                  let result = xhr.responseText;
                  alert(result);
                  //TODO: 가입완료 버튼 활성화
            }
      };
      //서버 작업 실행
      xhr.open('POST', '../user/idCheck.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('email='+inputEmail);
}

function join(){
      //input요소에 입력한 값 받아오기
      let inputEmail = document.querySelector('#email').value;
      let inputPassword = document.querySelector('#upw').value;
      let inputNickname = document.querySelector('#nickname').value;
      //TODO: 유효성 검사

      //서버 작업 설계
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                  //응답 받아오면 처리할 작업
                  let result = xhr.responseText;
                  if (result == 0) alert('DB작업 오류');
                  else if (result == 1){
                        alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
                        //로그인 페이지로 넘어가기
                        location.href='./login.html';
                  }
            }
      };
      //서버 작업 실행
      xhr.open('POST', '../user/join.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('email='+inputEmail+'&password='+inputPassword+'&nickname='+inputNickname);
}

function login(){
      //input요소에 입력한 값 받아오기
      let inputEmail = document.querySelector('#email').value;
      let inputPassword = document.querySelector('#upw').value;

      //서버 작업 설계
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                  //응답 받아오면 처리할 작업
                  let result = xhr.responseText;
                  if(result == "잘못된 아이디 혹은 비밀번호를 입력하셨습니다."){
                        alert(result);
                  }else{
                        let user = JSON.parse(result);
                        loginEmail = user.email;
                        loginNickname = user.nickname;
                        alert(loginEmail+", "+loginNickname);

                        //메인페이지로 넘어가기
                        location.href='../index.html';
                  }
            }
      };
      //서버 작업 실행
      xhr.open('POST', '../user/login.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send('email='+inputEmail+'&password='+inputPassword);
}