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
