<?php

$fullName = $_POST["tamisim"]; 
$emailAddress = $_POST["emailAddress"];
$phoneNumber = $_POST["telNo"];
$cityName = $_POST["sehirIsmi"];
$messageText = $_POST["messageText"];

?>

<!DOCTYPE html>
<html lang="tr">
      <head>
            <meta charset="UTF-8">
            <title>Form Sonucu</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
      </head>
      <body>

            <div class="container page-section">

                  <div class="content-card">

                        <h1 class="page-title">Gönderilen Bilgiler</h1>

                        <p><strong>Ad Soyad:</strong> <?php echo $fullName; ?></p>

                        <p><strong>E-posta:</strong> <?php echo $emailAddress; ?></p>

                        <p><strong>Telefon:</strong> <?php echo $phoneNumber; ?></p>

                        <p><strong>Şehir:</strong> <?php echo $cityName; ?></p>

                        <p><strong>Mesaj:</strong> <?php echo $messageText; ?></p>

                  </div>
            </div>
      </body>
</html>