<?php
header('Content-Type:text/plain; charset=utf-8');

// 요청데이터: email
// 응답텍스트: "중복 아님" or "중복"

// TODO: join.html 만들 때 가입완료 버튼 처음에 비활성화 해두고
// 아이디체크 버튼 눌러서 idCheck.php에서 체크완료해야 가입완료 버튼 활성화되도록 만들 것

// 서버명, 닷홈DB접속 아이디, 비번, DB이름
$db = mysqli_connect('localhost', 'maratangsoft', 'maratang2022!', 'maratangsoft');
mysqli_query($db, 'set names utf8');

// join.html에서 id 받아오기
$email = $_POST['email'];

// DB와 대조해서 중복 체크
$query = "SELECT *
          FROM gc_users
          WHERE email='$email'";
$result = mysqli_query($db, $query);

if (mysqli_num_rows($result) == 0) echo '중복 아님';
else echo '중복';
?>