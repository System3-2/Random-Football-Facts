// Variables

let btn = document.querySelector('.btn');
let question = document.querySelector('.text-question');
let answer = document.querySelector('.text-answer');
let back = document.querySelector('.text-wrapper');

// Arrays

const facts = [{question: 'Which player scored the fastest hat-trick in the Premier League?',
answer: 'Sadio Mane (2 minutes 56 seconds for Southampton vs Aston Villa in 2015'},
{
  question: 'Which player, with 653 games, has made the most Premier League appearances?',
  answer:'Gareth Barry'
},
{
  question: 'Three players share the record for most Premier League red cards (8). Who are they?',
  answer: 'Patrick Vieira, Richard Dunne and Duncan Ferguson'
},
{
  question: "With 260 goals, who is the Premier League's all-time top scorer?",
  answer: 'Alan Shearer'
},
{
  question: "When was the inaugural Premier League season?",
  answer: '1992-93'
},
{
  question: "Which team won the first Premier League title?",
  answer: 'Manchester United'
},
{
  question: "With 202 clean sheets, which goalkeeper has the best record in the Premier League?",
  answer: 'Peter Cech'
},
{
  question: "How many clubs competed in the inaugural Premier League season?",
  answer: "22"
},
{
  question: "Which three players shared the Premier League Golden Boot in 2018-19?",
  answer: "Pierre-Emerick Aubameyang, Mohamed Salah and Sadio Mane"
},
{
  question: "The fastest goal scored in Premier League history came in 7.69 seconds. Who scored it?",
  answer: "Shane Long (for Southampton vs Watford in 2018-19)"
}];
// color

const color = ['blue', 'red', 'maroon', 'yellow', 'green', 'gold', 'white', 'hotpink', 'coral', 'crimson', 'transparent'];

btn.addEventListener('click', function () {
  let random = Math.floor(Math.random() * facts.length);

  question.innerText = facts[random].question;
  answer.innerText = facts[random].answer;

  let randomColors = Math.floor(Math.random() * color.length);
  back.style.backgroundColor = color[randomColors];
})