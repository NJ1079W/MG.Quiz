// List of all recognized countries (UN member and observer states) with ISO 3166-1 alpha-2 codes
// Source: https://flagcdn.com/en/codes.json (names may be slightly adapted for quiz clarity)
const allCountries = [
  { name: "Afghanistan", code: "af" },
  { name: "Albania", code: "al" },
  { name: "Algeria", code: "dz" },
  { name: "Andorra", code: "ad" },
  { name: "Angola", code: "ao" },
  { name: "Antigua and Barbuda", code: "ag" },
  { name: "Argentina", code: "ar" },
  { name: "Armenia", code: "am" },
  { name: "Australia", code: "au" },
  { name: "Austria", code: "at" },
  { name: "Azerbaijan", code: "az" },
  { name: "Bahamas", code: "bs" },
  { name: "Bahrain", code: "bh" },
  { name: "Bangladesh", code: "bd" },
  { name: "Barbados", code: "bb" },
  { name: "Belarus", code: "by" },
  { name: "Belgium", code: "be" },
  { name: "Belize", code: "bz" },
  { name: "Benin", code: "bj" },
  { name: "Bhutan", code: "bt" },
  { name: "Bolivia", code: "bo" },
  { name: "Bosnia and Herzegovina", code: "ba" },
  { name: "Botswana", code: "bw" },
  { name: "Brazil", code: "br" },
  { name: "Brunei", code: "bn" },
  { name: "Bulgaria", code: "bg" },
  { name: "Burkina Faso", code: "bf" },
  { name: "Burundi", code: "bi" },
  { name: "Cabo Verde", code: "cv" },
  { name: "Cambodia", code: "kh" },
  { name: "Cameroon", code: "cm" },
  { name: "Canada", code: "ca" },
  { name: "Central African Republic", code: "cf" },
  { name: "Chad", code: "td" },
  { name: "Chile", code: "cl" },
  { name: "China", code: "cn" },
  { name: "Colombia", code: "co" },
  { name: "Comoros", code: "km" },
  { name: "Congo", code: "cg" },
  { name: "Costa Rica", code: "cr" },
  { name: "Croatia", code: "hr" },
  { name: "Cuba", code: "cu" },
  { name: "Cyprus", code: "cy" },
  { name: "Czechia", code: "cz" },
  { name: "Democratic Republic of the Congo", code: "cd" },
  { name: "Denmark", code: "dk" },
  { name: "Djibouti", code: "dj" },
  { name: "Dominica", code: "dm" },
  { name: "Dominican Republic", code: "do" },
  { name: "Ecuador", code: "ec" },
  { name: "Egypt", code: "eg" },
  { name: "El Salvador", code: "sv" },
  { name: "Equatorial Guinea", code: "gq" },
  { name: "Eritrea", code: "er" },
  { name: "Estonia", code: "ee" },
  { name: "Eswatini", code: "sz" },
  { name: "Ethiopia", code: "et" },
  { name: "Fiji", code: "fj" },
  { name: "Finland", code: "fi" },
  { name: "France", code: "fr" },
  { name: "Gabon", code: "ga" },
  { name: "Gambia", code: "gm" },
  { name: "Georgia", code: "ge" },
  { name: "Germany", code: "de" },
  { name: "Ghana", code: "gh" },
  { name: "Greece", code: "gr" },
  { name: "Grenada", code: "gd" },
  { name: "Guatemala", code: "gt" },
  { name: "Guinea", code: "gn" },
  { name: "Guinea-Bissau", code: "gw" },
  { name: "Guyana", code: "gy" },
  { name: "Haiti", code: "ht" },
  { name: "Honduras", code: "hn" },
  { name: "Hungary", code: "hu" },
  { name: "Iceland", code: "is" },
  { name: "India", code: "in" },
  { name: "Indonesia", code: "id" },
  { name: "Iran", code: "ir" },
  { name: "Iraq", code: "iq" },
  { name: "Ireland", code: "ie" },
  { name: "Israel", code: "il" },
  { name: "Italy", code: "it" },
  { name: "Jamaica", code: "jm" },
  { name: "Japan", code: "jp" },
  { name: "Jordan", code: "jo" },
  { name: "Kazakhstan", code: "kz" },
  { name: "Kenya", code: "ke" },
  { name: "Kiribati", code: "ki" },
  { name: "Kuwait", code: "kw" },
  { name: "Kyrgyzstan", code: "kg" },
  { name: "Laos", code: "la" },
  { name: "Latvia", code: "lv" },
  { name: "Lebanon", code: "lb" },
  { name: "Lesotho", code: "ls" },
  { name: "Liberia", code: "lr" },
  { name: "Libya", code: "ly" },
  { name: "Liechtenstein", code: "li" },
  { name: "Lithuania", code: "lt" },
  { name: "Luxembourg", code: "lu" },
  { name: "Madagascar", code: "mg" },
  { name: "Malawi", code: "mw" },
  { name: "Malaysia", code: "my" },
  { name: "Maldives", code: "mv" },
  { name: "Mali", code: "ml" },
  { name: "Malta", code: "mt" },
  { name: "Marshall Islands", code: "mh" },
  { name: "Mauritania", code: "mr" },
  { name: "Mauritius", code: "mu" },
  { name: "Mexico", code: "mx" },
  { name: "Micronesia", code: "fm" },
  { name: "Moldova", code: "md" },
  { name: "Monaco", code: "mc" },
  { name: "Mongolia", code: "mn" },
  { name: "Montenegro", code: "me" },
  { name: "Morocco", code: "ma" },
  { name: "Mozambique", code: "mz" },
  { name: "Myanmar", code: "mm" },
  { name: "Namibia", code: "na" },
  { name: "Nauru", code: "nr" },
  { name: "Nepal", code: "np" },
  { name: "Netherlands", code: "nl" },
  { name: "New Zealand", code: "nz" },
  { name: "Nicaragua", code: "ni" },
  { name: "Niger", code: "ne" },
  { name: "Nigeria", code: "ng" },
  { name: "North Korea", code: "kp" },
  { name: "North Macedonia", code: "mk" },
  { name: "Norway", code: "no" },
  { name: "Oman", code: "om" },
  { name: "Pakistan", code: "pk" },
  { name: "Palau", code: "pw" },
  { name: "Palestine", code: "ps" },
  { name: "Panama", code: "pa" },
  { name: "Papua New Guinea", code: "pg" },
  { name: "Paraguay", code: "py" },
  { name: "Peru", code: "pe" },
  { name: "Philippines", code: "ph" },
  { name: "Poland", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Qatar", code: "qa" },
  { name: "Romania", code: "ro" },
  { name: "Russia", code: "ru" },
  { name: "Rwanda", code: "rw" },
  { name: "Saint Kitts and Nevis", code: "kn" },
  { name: "Saint Lucia", code: "lc" },
  { name: "Saint Vincent and the Grenadines", code: "vc" },
  { name: "Samoa", code: "ws" },
  { name: "San Marino", code: "sm" },
  { name: "Sao Tome and Principe", code: "st" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Senegal", code: "sn" },
  { name: "Serbia", code: "rs" },
  { name: "Seychelles", code: "sc" },
  { name: "Sierra Leone", code: "sl" },
  { name: "Singapore", code: "sg" },
  { name: "Slovakia", code: "sk" },
  { name: "Slovenia", code: "si" },
  { name: "Solomon Islands", code: "sb" },
  { name: "Somalia", code: "so" },
  { name: "South Africa", code: "za" },
  { name: "South Korea", code: "kr" },
  { name: "South Sudan", code: "ss" },
  { name: "Spain", code: "es" },
  { name: "Sri Lanka", code: "lk" },
  { name: "Sudan", code: "sd" },
  { name: "Suriname", code: "sr" },
  { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" },
  { name: "Syria", code: "sy" },
  { name: "Taiwan", code: "tw" },
  { name: "Tajikistan", code: "tj" },
  { name: "Tanzania", code: "tz" },
  { name: "Thailand", code: "th" },
  { name: "Timor-Leste", code: "tl" },
  { name: "Togo", code: "tg" },
  { name: "Tonga", code: "to" },
  { name: "Trinidad and Tobago", code: "tt" },
  { name: "Tunisia", code: "tn" },
  { name: "Turkey", code: "tr" },
  { name: "Turkmenistan", code: "tm" },
  { name: "Tuvalu", code: "tv" },
  { name: "Uganda", code: "ug" },
  { name: "Ukraine", code: "ua" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "United Kingdom", code: "gb" },
  { name: "United States", code: "us" },
  { name: "Uruguay", code: "uy" },
  { name: "Uzbekistan", code: "uz" },
  { name: "Vanuatu", code: "vu" },
  { name: "Vatican City", code: "va" },
  { name: "Venezuela", code: "ve" },
  { name: "Vietnam", code: "vn" },
  { name: "Yemen", code: "ye" },
  { name: "Zambia", code: "zm" },
  { name: "Zimbabwe", code: "zw" }
];

// Generate a countries array with flag URLs
const countries = allCountries.map(c => ({
  name: c.name,
  flag: `https://flagcdn.com/${c.code}.svg`
}));

const numQuestions = 10;
let questions = [];
let current = 0;
let score = 0;

function pickRandomCountries(count, exclude) {
    let available = countries.filter(c => c !== exclude);
    let picked = [];
    while (picked.length < count) {
        let c = available[Math.floor(Math.random() * available.length)];
        if (!picked.includes(c)) picked.push(c);
    }
    return picked;
}

function generateQuestions() {
    let shuffled = countries.slice().sort(() => Math.random() - 0.5);
    let quizQuestions = [];
    for (let i = 0; i < numQuestions; i++) {
        let correct = shuffled[i % shuffled.length];
        let others = pickRandomCountries(3, correct);
        let options = [correct, ...others].sort(() => Math.random() - 0.5);
        quizQuestions.push({
            flag: correct.flag,
            answer: correct.name,
            options: options.map(o => o.name)
        });
    }
    return quizQuestions;
}

function showQuestion() {
    let q = questions[current];
    document.getElementById('flag-img').src = q.flag;
    document.getElementById('result').textContent = "";
    document.getElementById('score').textContent = `Question ${current + 1} of ${numQuestions} | Score: ${score}`;
    let optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = "";
    q.options.forEach(name => {
        let btn = document.createElement('button');
        btn.textContent = name;
        btn.className = "option";
        btn.onclick = () => checkAnswer(name);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected) {
    let q = questions[current];
    let result = document.getElementById('result');
    if (selected === q.answer) {
        score++;
        result.textContent = "Correct!";
        result.style.color = "green";
    } else {
        result.textContent = `Wrong! Answer: ${q.answer}`;
        result.style.color = "red";
    }
    Array.from(document.getElementsByClassName('option')).forEach(btn => btn.disabled = true);
    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    current++;
    if (current < numQuestions) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz').innerHTML = `<div class="score">Your final score: ${score} / ${numQuestions}</div>`;
    document.getElementById('play-again').style.display = '';
}

function startQuiz() {
    questions = generateQuestions();
    current = 0;
    score = 0;
    document.getElementById('play-again').style.display = 'none';
    document.getElementById('quiz').innerHTML = `
        <div class="score" id="score"></div>
        <img src="" alt="Country flag" class="flag" id="flag-img">
        <div class="options" id="options"></div>
        <div class="result" id="result"></div>
    `;
    showQuestion();
}

document.getElementById('play-again').onclick = startQuiz;

window.onload = startQuiz;
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flag Quiz</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin: 40px; }
    img.flag { width: 200px; height: auto; margin: 20px 0; }
    input[type="text"] { padding: 8px; width: 250px; font-size: 16px; }
    button { padding: 8px 16px; font-size: 16px; margin-left: 5px; }
    .result { margin: 15px; font-weight: bold; }
    .score { margin: 10px; font-size: 18px; }
  </style>
</head>
<body>
  <h1>🌍 Flag Quiz 🌍</h1>
  <div id="quiz"></div>
  <div id="play-again" style="display:none; margin-top:20px;">
    <button>Play Again</button>
  </div>

  <script>
    // List of all recognized countries (shortened here for demo — keep your full list!)
    const allCountries = [
      { name: "Afghanistan", code: "af" },
      { name: "Albania", code: "al" },
      { name: "Algeria", code: "dz" },
      { name: "Andorra", code: "ad" },
      { name: "Angola", code: "ao" },
      { name: "Argentina", code: "ar" },
      { name: "Australia", code: "au" },
      { name: "Austria", code: "at" },
      { name: "Belgium", code: "be" },
      { name: "Brazil", code: "br" },
      { name: "Canada", code: "ca" },
      { name: "China", code: "cn" },
      { name: "France", code: "fr" },
      { name: "Germany", code: "de" },
      { name: "India", code: "in" },
      { name: "Japan", code: "jp" },
      { name: "United States", code: "us" },
      { name: "United Kingdom", code: "gb" }
      // 👉 keep adding full list from your original code
    ];

    const countries = allCountries.map(c => ({
      name: c.name,
      flag: `https://flagcdn.com/${c.code}.svg`
    }));

    const numQuestions = 10;
    let questions = [];
    let current = 0;
    let score = 0;

    function generateQuestions() {
      let shuffled = countries.slice().sort(() => Math.random() - 0.5);
      return shuffled.slice(0, numQuestions).map(c => ({
        flag: c.flag,
        answer: c.name
      }));
    }

    function showQuestion() {
      let q = questions[current];
      document.getElementById('quiz').innerHTML = `
        <div class="score">Question ${current + 1} of ${numQuestions} | Score: ${score}</div>
        <img src="${q.flag}" alt="Country flag" class="flag">
        <div><input type="text" id="answer" placeholder="Type country name"></div>
        <div><button onclick="submitAnswer()">Submit</button></div>
        <div class="result" id="result"></div>
      `;
      document.getElementById('answer').focus();
      document.getElementById('answer').addEventListener('keypress', e => {
        if (e.key === 'Enter') submitAnswer();
      });
    }

    function submitAnswer() {
      let q = questions[current];
      let input = document.getElementById('answer').value.trim();
      let result = document.getElementById('result');
      if (!input) return;

      if (input.toLowerCase() === q.answer.toLowerCase()) {
        score++;
        result.textContent = "✅ Correct!";
        result.style.color = "green";
      } else {
        result.textContent = `❌ Wrong! Answer: ${q.answer}`;
        result.style.color = "red";
      }
      setTimeout(nextQuestion, 1200);
    }

    function nextQuestion() {
      current++;
      if (current < numQuestions) {
        showQuestion();
      } else {
        endQuiz();
      }
    }

    function endQuiz() {
      document.getElementById('quiz').innerHTML = `<div class="score">Your final score: ${score} / ${numQuestions}</div>`;
      document.getElementById('play-again').style.display = '';
    }

    function startQuiz() {
      questions = generateQuestions();
      current = 0;
      score = 0;
      document.getElementById('play-again').style.display = 'none';
      showQuestion();
    }

    document.querySelector('#play-again button').onclick = startQuiz;
    window.onload = startQuiz;
  </script>
</body>
</html>
