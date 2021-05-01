// Variables
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById('email'),
subject = document.getElementById('subject'),
message = document.getElementById('message'),
reset = document.getElementById('resetbtn'),
sendEmailForm = document.getElementById('email-form');






// Event Listeners
eventListeners();


function eventListeners(){
// App init
document.addEventListener('DOMContentLoaded', appInit);

  // Validate the forms
  email.addEventListener('blur', validateField);
  subject.addEventListener('blur', validateField);
  message.addEventListener('blur', validateField);


  // send email and reset button
  sendEmailForm.addEventListener('submit', sendEmail);
  resetBtn.addEventListener('click', resetForm);
}





// Functions
// App intitialization
function appInit() {
  // disable the send button on load
  sendBtn.disabled = true;
}


function sendEmail(e) {
  e.preventDefault();
  // show the spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'block';


  // show the gif image
  const sendEmailImg = document.createElement('img');
  sendEmailImg.src = 'img/mail.gif';
  sendEmailImg.style.display = 'block';


  // hide spinner then show the send email image
  setTimeout(function() {
    // hide the spinner
    spinner.style.display = 'none';


    // show the gif image
    document.querySelector('#loaders').appendChild( sendEmailImg );


    // After 5 seconds, hide the image and reset the form
    setTimeout(function() {
      // hide the spinner
      sendEmailForm.reset();    
      sendEmailImg.remove();  
    }, 5000 );


  }, 3000 );
}
