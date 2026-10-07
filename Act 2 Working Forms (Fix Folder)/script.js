const type_name = document.getElementById('type_name');
const type_email = document.getElementById('type_email');     
const type_rating = document.getElementById('type_rating');
const type_sub = document.getElementById('type_sub');
const type_message = document.getElementById('type_message');
a
const submit_btn = document.getElementById('submit_btn');
const output_Cont = document.getElementById('output_Cont');

const out_name = document.getElementById('out_name');
const out_email = document.getElementById('out_email');
const out_rating = document.getElementById('out_rating');
const out_subject = document.getElementById('out_subject');
const out_messsage = document.getElementById('out_messsage');

submit_btn.addEventListener('click', function() {

const name = type_name.value.trim();
const email = type_email.value.trim();
const rating = parseInt (type_rating.value);
const sub = type_sub.value.trim();
const message = type_message.value.trim();

if (!name || !email || !sub || isNaN(rating) || !message){
   output_Cont.classList.add('hidden');
   return;
}

if (rating < 1 || rating > 5){
   output_Cont.classList.add('hidden');
   return;
}

let ratingDescription = rating >= 4 ? "5 - Excellent" : (rating === 3 ? "4 - Very Good" : "Good"); 
let customThankYou = 'Thanks for noting: "${comments.substring(0, 30)}..." we appreciate you!';

out_name.textContent = name;   
out_email.textContent = email;
out_rating.textContent = '&{rating} Stars (${ratingDescription})';
out_subject.textContent =  out_subject;
out_messsage.textContent = customThankYou;

output_Cont.classList.remove('hidden');
}
)
