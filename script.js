function toggleNav() {
  document.getElementById("myNavbar").classList.toggle("myNavbar-v");
}
const myform=document.forms["myform"]
myform.ad
Email.send({
  Host : "smtp.elasticemail.com",
  Username : "contact@elasticemail.com",
  Password : "E3883B14C76D3B152B1D2AE714F9597ED680",
  To : 'harshithprasasd998@gmail.com',
  From : "harshithprasasd998@gmail.com",
  Subject : "This is the subject",
  Body : "And this is the body"+document.forms['myform']['userMsg'].value,
}).then(
message => alert(message)
);
