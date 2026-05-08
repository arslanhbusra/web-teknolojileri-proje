<!DOCTYPE html>
<html lang="tr">
      <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>İletişim Bilgileri</title>
            <link rel="stylesheet" href="style.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
      <body>
            <main class="page-section">
                  <div class="container mt-5">
                        <h1 class="page-title">İletişim Sonucu</h1>
                        <div class="content-card p-4 shadow-sm bg-light">
                              <?php
                              if ($_SERVER["REQUEST_METHOD"] == "POST") {
                                  $adSoyad = htmlspecialchars($_POST['tamisim']);
                                  $email = htmlspecialchars($_POST['emailAddress']);
                                  $tel = htmlspecialchars($_POST['telNo']);
                                  $sehir = htmlspecialchars($_POST['sehirIsmi']);
                                  $cinsiyet = isset($_POST['cinsiyet']) ? htmlspecialchars($_POST['cinsiyet']) : "Belirtilmedi";
                                  
                                  $hobiler = isset($_POST['hobiler']) ? implode(", ", $_POST['hobiler']) : "Seçilmedi";
                                  $mesaj = htmlspecialchars($_POST['messageText']);

                                  echo "<p><strong>Ad Soyad:</strong> $adSoyad</p>";
                                  echo "<p><strong>E-posta:</strong> $email</p>";
                                  echo "<p><strong>Telefon:</strong> $tel</p>";
                                  echo "<p><strong>Şehir:</strong> $sehir</p>";
                                  echo "<p><strong>Cinsiyet:</strong> $cinsiyet</p>";
                                  echo "<p><strong>İlgi Alanları:</strong> $hobiler</p>";
                                  echo "<p><strong>Mesaj:</strong> $mesaj</p>";
                              } else {
                                  echo "<p class='text-danger'>Form verisi gönderilmedi!</p>";
                              }
                              ?>
                              <hr>
                              <a href="iletisim.html" class="btn btn-primary">Geri Dön</a>
                        </div>
                  </div>
            </main>
      </body>
</html>