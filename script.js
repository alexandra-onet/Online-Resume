const { clear } = require("console");

function sendEmail() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  var text;
  var templateParams = {
    name: name,
    message: message,
    email: email,
  }
  error_message.style.padding = '10px';

if (name.length < 5) {
    text = 'Please Enter Valid Name';
    error_message.innerHTML = text;
  }
  if (message.length <= 1) {
    text = 'Please Enter Message';
    error_message.innerHTML = text;
  } 
   if (email.indexOf('@') == -1 || email.length < 10) {
    text = 'Please Enter Valid Email';
     error_message.innerHTML = text;
     return false;
   } 
  
  emailjs.send('Alexandraonet05', 'template_jtlz0ph', templateParams, 'user_1ACseyVKHUYiFSYQUmV45')
    .then((result) => {
      console.log(result.text);
      text = 'Your message has sent';
      error_message.innerHTML = text;
      reset();
      }, (error) => {
      console.log(error.text);
      text = 'Something went wrong';
      error_message.innerHTML = text;

    });

} 