<?php
      $username = isset($_POST["username"]) ? $_POST["username"] : "";
      $password = isset($_POST["password"]) ? $_POST["password"] : "";

      $correctUsername = "b251210076@sakarya.edu.tr";
      $correctPassword = "b251210076";
?>
<!DOCTYPE html>
<html lang="tr">
      <head>
            <meta charset="UTF-8">
            <title>Login Sonucu</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
      </head>
      <body>
            <div class="container mt-5">
                  <?php if($username == $correctUsername && $password == $correctPassword): ?>
                        <div class="content-card text-center p-5 shadow">
                              <h1 class="page-title text-success">Hoşgeldiniz B251210076</h1>
                              <p>Giriş Başarılı.</p>
                              <p><strong><?php echo htmlspecialchars($username); ?></strong></p>
                              <a href="index.html" class="btn btn-primary">Anasayfaya Dön</a>
                        </div>
                  <?php else: ?>
                        <div class="content-card text-center p-5 shadow">
                              <h1 class="page-title text-danger">Hatalı Giriş</h1>
                              <p>Kullanıcı adı veya şifre yanlış.</p>
                              <a href="login.html" class="btn btn-warning">Tekrar Dene</a>
                        </div>
                  <?php endif; ?>
            </div>
      </body>
</html>