const iletisimFormu = document.getElementById("iletisimFormu");
const nativeCheckButton = document.getElementById("nativeCheckButton");
const formMessage = document.getElementById("formMessage");

function checkForm() {
  const fullName = document.getElementById("tamisim").value.trim();
  const emailAddress = document.getElementById("emailAddress").value.trim();
  const phoneNumber = document.getElementById("telNo").value.trim().replace(/\s/g, "");
  const cityName = document.getElementById("sehirIsmi").value;
  const messageText = document.getElementById("messageText").value.trim();

  const selectedGender = document.querySelector("input[name='cinsiyet']:checked");
  const selectedInterests = document.querySelectorAll("input[name='hobiler[]']:checked");

  const namePattern = /^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^0[0-9]{10}$/;

  if (fullName === "") {
    return showMessage("Ad Soyad alanı boş bırakılamaz.", false);
  }

  if (!namePattern.test(fullName)) {
    return showMessage("Ad Soyad sadece harflerden oluşmalıdır.", false);
  }

  if (!emailPattern.test(emailAddress)) {
    return showMessage("Geçerli bir e-posta adresi giriniz.", false);
  }

  if (!phonePattern.test(phoneNumber)) {
    return showMessage("Telefon numarası sadece rakamlardan oluşmalı, başında sıfır bulunmalı ve 11 haneli olmalıdır.", false);
  }

  if (cityName === "") {
    return showMessage("Lütfen şehir seçiniz.", false);
  }

  if (selectedGender === null) {
    return showMessage("Lütfen cinsiyet seçiniz.", false);
  }

  if (selectedInterests.length === 0) {
    return showMessage("Lütfen en az bir ilgi alanı seçiniz.", false);
  }

  if (messageText === "") {
    return showMessage("Mesaj alanı boş bırakılamaz. Lütfen doldurunuz.", false);
  }

  showMessage("Native JavaScript kontrolü başarılı. Form gönderilebilir.", true);
  return true;
}

nativeCheckButton.addEventListener("click", function () {
  checkForm();
});

iletisimFormu.addEventListener("submit", function (event) {
  if (!checkForm()) {
    event.preventDefault();
  }
});

function showMessage(message, isSuccess) {
  formMessage.textContent = message;
  formMessage.classList.remove("success-message", "error-message");
  formMessage.style.display = "block";

  if (isSuccess) {
    formMessage.classList.add("success-message");
  } else {
    formMessage.classList.add("error-message");
  }

  return isSuccess;
}

const vueCheckButton = document.getElementById("vueCheckButton");

vueCheckButton.addEventListener("click", function(){
  const fullName = document.getElementById("tamisim").value.trim();
  const emailAddress = document.getElementById("emailAddress").value.trim();

  if (fullName.length < 3) {
    showMessage("Vue Kontrolü: Ad Soyad en az 3 karakter olmalıdır.", false);
    return;
  }

  if(!emailAddress.includes("@")) {
    showMessage("Vue Kontrolü: E-posta formatı hatalı, @ işaretinin bulunduğundan emin olun.", false);
    return;
  }

  showMessage("Vue Kontrolü başarılı. Form gönderilebilir.", true);
})