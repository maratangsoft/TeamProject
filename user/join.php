<?php
header('Content-Type:text/plain; charset=utf-8');

// 요청데이터: email, password, nickname
// 응답텍스트: "DB작업 오류" or "회원가입 성공"

// 서버명, 닷홈DB접속 아이디, 비번, DB이름
$db = mysqli_connect('localhost', 'maratangsoft', 'maratang2022!', 'maratangsoft');
mysqli_query($db, 'set names utf8');

// join.html에서 id, password, nickname, email 받아오기
$email = $_POST['email'];
$password = $_POST['password'];
$nickname = $_POST['nickname'];

// 받아온 값들 DB에 저장하기
$query = "INSERT INTO gc_users(email, password, nickname) 
          VALUES ('$email','$password','$nickname')";
$result = mysqli_query($db, $query);

// 상태메시지 전송
echo $result;

// DB접속 끝내기
mysqli_close($db);
?>