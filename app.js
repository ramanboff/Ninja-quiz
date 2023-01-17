const correctAnswer = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result') //  0%

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let score = 0
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ] //A or B

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25
    }
  })
  //console.log(score);

  //show result on page
  scrollTo(0, 0)
  //result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-none')

  let output = 0
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    if (output === score) {
      clearInterval(timer)
    } else {
      output++
    }
  }, 40)
})

//window object (global object)
/* console.log('hello');
window.console.log('hello');

console.log(document.querySelector('form'));
window.console.log(document.querySelector('form'));

alert('hello');
window.alert('hello'); */

/* 
setTimeout(() => {
  alert('hello');
}, 3000); */

/* let i = 0;
 const timer = setInterval(() => {
    console.log('hello');
    i++;
    if(i ===5){
        clearInterval(timer);
    }
    
}, 200); */
