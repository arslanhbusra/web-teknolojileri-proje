<?php
$username = $_POST["username"];
$password = $_POST["password"];

$correctUsername = "b251210076@sakarya.edu.tr";
$correctPassword = "b251210076";

?>

<!DOCTYPE html>
<html lang="tr">
      <head>
            <meta charset="UTF-8">
            <title>Login Sunucu</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
      </head>
      <body>
            <div class="container page-section">
                  <?php
                  if($username == $correctUsername && $password == $correctPassword) {
                        echo'
                        <div class="content-card text-center>
                              <h1 class="page-title">Hoşgeldiniz B251210076</h1>
                              <p>Giriş Başarılı.</p>
                              <p><strong>'.$username.'</strong></p>
                        </div>
                        ';
                        }  else {
                              echo '
                              <div class="content-card text-center">
                              <h1 class="page-title">Hatalı Giriş</h1>
                              <p>Kullanıcı adı veya şifre yanlış.</p>
                              <a href="login.html" class="main-button">Tekrar Dene</a>
                              </div>
                              ';
                        }
                  ?>
            </div>
      </body>
</html>