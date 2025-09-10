// ----------------------
// Theme Toggle
// ----------------------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// ----------------------
// Counter Project
// ----------------------
let counter = 0;
const counterValue = document.getElementById('counterValue');

function updateCounter(val) {
  counter += val;
  return counter;
}

document.getElementById('increaseBtn').addEventListener('click', () => {
  counterValue.textContent = updateCounter(1);
});
document.getElementById('resetBtn').addEventListener('click', () => {
  counter = 0; 
  counterValue.textContent = counter;
});

// ----------------------
// FAQ Toggle
// ----------------------
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ----------------------
// Part 2: Functions
// ----------------------
function greetUser(name) {
  return `Hello, ${name}!`;
}
function squareNumber(num) {
  let result = num * num;
  return result;
}
console.log(greetUser("Eunice"));
console.log("Square of 4 is", squareNumber(4));

// ----------------------
// Part 3: Animations with JS
// ----------------------
const animateBoxBtn = document.getElementById('animateBoxBtn'); 
const box = document.getElementById('box');
animateBoxBtn.addEventListener('click', () => {
  box.style.transform = "translateX(200px) rotate(180deg)";
  setTimeout(() => { box.style.transform = "translateX(0) rotate(0)"; }, 1000);
});

// ----------------------
// Modal (Contact Info)
// ----------------------
const modal = document.getElementById('modal');
const showModalBtn = document.getElementById('showModalBtn');
const closeModal = document.getElementById('closeModal');

showModalBtn.addEventListener('click', () => {
  modal.style.display = "flex";
});
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

