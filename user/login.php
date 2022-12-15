<?php
header('Content-Type:application/json; charset=utf-8');

// 요청데이터: email, password
// 응답텍스트: JSON객체 or "잘못된 아이디 혹은 비밀번호를 입력하셨습니다."

// 서버명, 닷홈DB접속 아이디, 비번, DB이름
$db = mysqli_connect('localhost', 'maratangsoft', 'maratang2022!', 'maratangsoft');
mysqli_query($db, 'set names utf8');

// login.html에서 id, password 받아오기
$email = $_POST['email'];
$password = $_POST['password'];

// id, password가 일치하는 회원정보 DB에서 가져오기
$query = "SELECT email, nickname
          FROM gc_users
          WHERE email='$email' AND password='$password'";
$result = mysqli_query($db, $query);

if (mysqli_num_rows($result) == 0){ //TODO: 결과 없으면 0인지 null인지 확인 필요
      // 일치하는 회원 없으면 에러메시지
      echo "잘못된 메일주소 혹은 비밀번호를 입력하셨습니다.";
}else{
      // 일치하는 회원 있으면 JSON형식으로 회원정보 전송
      $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
      echo json_encode($user);
}
// DB접속 끝내기
mysqli_close($db);
?>