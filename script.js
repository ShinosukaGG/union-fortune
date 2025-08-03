// ==== CONFIGURATION ====

// 3 fortune teller questions
const QUESTIONS = [
  {
    title: "Pick Your Crypto Spirit Animal",
    options: [
      { value: "capybara", label: "🦫 Capybara — Calm but connected" },
      { value: "hedgehog", label: "🦔 Hedgehog — Spikey, but early" },
      { value: "frog",     label: "🐸 Frog — Meme maxxer" },
      { value: "unicorn",  label: "🦄 Unicorn — Dream big or stay poor" },
      { value: "ai",       label: "🧠 AI brain — You know too much" }
    ]
  },
  {
    title: "What Would You Trade for a Fortune?",
    options: [
      { value: "eth",     label: "0.01 testnet ETH" },
      { value: "whitelist", label: "A single whitelist spot" },
      { value: "meme",    label: "My 12th favorite meme" },
      { value: "scrolling", label: "5 mins of CT doomscrolling" },
      { value: "sleep",   label: "My sleep schedule" }
    ]
  },
  {
    title: "What Chain Feels Lucky to You Today?",
    options: [
      { value: "ethereum", label: "Ethereum" },
      { value: "solana",   label: "Solana" },
      { value: "sui",      label: "Sui" },
      { value: "base",     label: "Base" },
      { value: "capybara", label: "Whichever chain Capybara likes" }
    ]
  }
];

// ==== 100 FORTUNES ====
const FORTUNES = [
  "Union will make you richer than you ever dreamed.",
  "Your $U bags will multiply soon.",
  "The next airdrop will be the one that changes your life.",
  "Your wallet will receive surprise rewards—check often!",
  "Capybara blesses your portfolio with green candles.",
  "You will wake up to unexpected mainnet riches.",
  "Your luck in crypto is about to hit all-time high.",
  "You’ll be the first to hear about the next Union airdrop.",
  "The next meme you post will earn you real tokens.",
  "You’ll discover a hidden gem on Union before anyone else.",
  "Your Union testnet work will pay off in a big way.",
  "Soon you’ll be flexing a top wallet rank.",
  "Financial freedom is closer than you think—Union is the way.",
  "You will make new friends and new gains in the Union Discord.",
  "You will win a Union NFT that moons in value.",
  "You’ll be known as the “smart one” who went all in on Union.",
  "Today’s good vibes will lead to tomorrow’s big profits.",
  "You’re on the whitelist—don’t miss the chance.",
  "You will be the friend everyone asks for crypto alpha.",
  "Capybara is sending gains your way.",
  "Your next transaction will land you an unexpected bonus.",
  "You will ape early into the next Union-supported chain.",
  "Union will help you finally quit your 9-to-5.",
  "You will brag about your airdrop to all your friends.",
  "Your $U tokens will be worth more than you expected.",
  "Testnet activity = mainnet rewards. Keep going!",
  "You will be the first to sell at the top.",
  "The next Union governance vote will make you a whale.",
  "Someone will DM you for investment tips—don’t forget to shill Union!",
  "You will accidentally go viral in crypto Twitter.",
  "You’ll bridge at the perfect time—maximum rewards.",
  "A free mint is in your near future.",
  "Union will make your wallet the envy of your circle.",
  "You’ll catch a price pump before it trends.",
  "You’ll be early—again.",
  "Today’s test transaction is tomorrow’s profit.",
  "You will find passive income through Union protocols.",
  "Your PFP will be rare and valuable.",
  "You’ll soon be listed on a “Top Union OGs” thread.",
  "Union is the cheat code to generational wealth.",
  "Your mainnet transactions will always succeed.",
  "You will find yourself in the next Union leaderboard snapshot.",
  "You’ll be tipped in $U just for being helpful.",
  "You’ll get lucky with the next NFT drop.",
  "Union will bring you more surprises than your birthday.",
  "You’re about to make the smartest crypto move of the year.",
  "That wallet you forgot about? It’s about to come alive.",
  "Union will help you fund your next adventure.",
  "The capybara sees free tokens in your future.",
  "Your “GM” will be answered with good news.",
  "You’ll get rewarded for just showing up.",
  "One of your posts will become legendary in Union’s history.",
  "You’ll flip your first NFT for a huge profit.",
  "You’ll be on the right side of the next major upgrade.",
  "Union will help you escape the bear market blues.",
  "You’ll be the first to try a new feature—and profit from it.",
  "Capybara thinks you have diamond hands.",
  "Next gas fee? Union will make it basically free.",
  "You’ll cash out at the perfect top.",
  "Friends will copy your trades—and thank you later.",
  "You’ll unlock exclusive alpha as a Union user.",
  "You’ll win a meme contest and real money too.",
  "You’ll be praised for your foresight in the next bull run.",
  "Your future holds airdrops, whitelists, and good vibes.",
  "Someone will ask you “How did you know?”—your answer: Union.",
  "You’ll spot a trend early and ride it to profits.",
  "Union will help you travel the world.",
  "You’ll have more $U than you ever planned.",
  "Your notifications will be all “payment received.”",
  "You’ll never miss a big drop again.",
  "You’ll find yourself airdropped just for being you.",
  "The capybara says: “You are early. Stay bullish.”",
  "Your next idea will make it to Union’s main page.",
  "You’ll become a legend for your contributions.",
  "Union will boost your social clout and your net worth.",
  "The community will thank you with rewards.",
  "Your luckiest trade is still ahead.",
  "Your bags will get heavier—in a good way.",
  "You’ll get rich memeing with capybara.",
  "You’ll finally buy that thing you’ve always wanted.",
  "Union will connect you to life-changing opportunities.",
  "You’ll win a prize you didn’t even enter.",
  "Someone will copy your wallet address—just to follow your moves.",
  "You’ll be featured in Union’s next big announcement.",
  "You’ll sleep through a pump and wake up rich.",
  "Every tx you make will take you closer to your goals.",
  "Union will make you the star of your group chat.",
  "Your hustle will turn into passive income.",
  "You’ll never need to worry about fees again.",
  "You’ll land on the “Most Valuable Player” list.",
  "Your portfolio will thank you later.",
  "You’ll become the airdrop king (or queen).",
  "You’ll receive bonus rewards for your early faith.",
  "You’ll be so early, you’ll set the meta.",
  "Capybara will send you secret alpha—watch for signs.",
  "You’ll be remembered as a founding degen.",
  "Union is about to turn your dreams into deposits.",
  "You’ll break your own all-time-high.",
  "You’ll be “that person” who everyone wishes they listened to.",
  "Union will turn your luck around for good."
];

// ==== DOM ELEMENTS ====

const landing = document.getElementById('landing');
const questionBox = document.getElementById('question');
const qTitle = document.getElementById('q-title');
const qForm = document.getElementById('q-form');
const qSubmit = document.getElementById('q-submit');
const fortuneBox = document.getElementById('fortune');
const fortuneResult = document.getElementById('fortune-result');
const fortuneImg = document.getElementById('fortune-img');
const shareBtn = document.getElementById('share-btn');
const confettiCanvas = document.getElementById('confetti-canvas');

let username = '';
let answers = [];
let qIndex = 0;

// ==== FORTUNE PERSISTENCE ====

function getSavedFortune(username) {
  try {
    return JSON.parse(localStorage.getItem('fortune-' + username));
  } catch {
    return null;
  }
}
function saveFortune(username, fortuneIdx) {
  localStorage.setItem('fortune-' + username, JSON.stringify({ fortuneIdx }));
}

// ==== DETERMINISTIC FORTUNE ====

function getFortuneIndex(username, answers, len) {
  let str = username + answers.join('-');
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash) % len;
}

// ==== CONFETTI ====

function confettiBurst() {
  confettiCanvas.style.display = "block";
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  let particles = [];
  const confettiCount = 220;
  for(let i=0; i<confettiCount; i++){
    particles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * -confettiCanvas.height/2,
      r: Math.random() * 6 + 6,
      d: Math.random() * 60 + 40,
      color: `hsl(${Math.random()*360}, 70%, 60%)`,
      tilt: Math.random() * 20 - 10,
      tiltAngleIncrement: Math.random() * 0.08 + 0.06,
      tiltAngle: 0,
      speed: Math.random() * 2 + 2
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);
    for(let i=0;i<particles.length;i++){
      let p = particles[i];
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.r, p.r*0.7, p.tilt, 0, 2*Math.PI);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
    update();
    if(frame++ < 180) requestAnimationFrame(draw);
    else confettiCanvas.style.display = "none";
  }
  function update() {
    for(let i=0;i<particles.length;i++){
      let p = particles[i];
      p.y += p.speed;
      p.x += Math.sin(frame/12 + p.d) * 1.2;
      p.tiltAngle += p.tiltAngleIncrement;
      p.tilt = Math.sin(p.tiltAngle) * 12;
      if(p.y > confettiCanvas.height + 24){
        p.x = Math.random() * confettiCanvas.width;
        p.y = Math.random() * -confettiCanvas.height/3;
      }
    }
  }
  draw();
}
window.addEventListener('resize', () => {
  if(confettiCanvas.style.display === "block"){
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
});

// ==== UI LOGIC ====

document.getElementById('start-btn').onclick = function() {
  username = document.getElementById('username').value.trim().replace(/^@/, '');
  if(!username) {
    document.getElementById('username').focus();
    return;
  }
  landing.style.display = "none";
  qIndex = 0;
  answers = [];
  showQuestion();
};

function showQuestion() {
  if(qIndex >= QUESTIONS.length) return;
  questionBox.style.display = "flex";
  qTitle.textContent = QUESTIONS[qIndex].title;
  qForm.innerHTML = '';
  QUESTIONS[qIndex].options.forEach((opt, idx) => {
    const id = `q${qIndex}_${idx}`;
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerHTML = `<input type="radio" name="q" id="${id}" value="${opt.value}" />
      <span>${opt.label}</span>`;
    qForm.appendChild(label);
  });
}

qSubmit.onclick = function(e) {
  e.preventDefault();
  const checked = qForm.querySelector('input[type="radio"]:checked');
  if(!checked) return;
  answers.push(checked.value);
  qIndex++;
  if(qIndex < QUESTIONS.length) {
    showQuestion();
  } else {
    questionBox.style.display = "none";
    showFortune();
  }
};

// Optional: Deselect radio label highlight
qForm.addEventListener('change', function(e) {
  Array.from(qForm.children).forEach(lbl => lbl.classList.remove('selected'));
  const checked = qForm.querySelector('input[type="radio"]:checked');
  if (checked) {
    checked.parentElement.classList.add('selected');
  }
});

// ==== FORTUNE REVEAL ====

function showFortune() {
  fortuneImg.src = "fortune2.png";
  fortuneImg.alt = "Capybara Fortune";
  fortuneBox.style.display = "flex";
  let idx = getFortuneIndex(username, answers, FORTUNES.length);
  fortuneResult.textContent = FORTUNES[idx];
  saveFortune(username, idx);
  setTimeout(confettiBurst, 150);

  shareBtn.onclick = function() {
    const text =
      `🔮 Union Capybara Fortune Teller just revealed my fortune:\n\n` +
      `"${FORTUNES[idx]}"\n\n` +
      `🤔 What could it mean?\nWen airdrop? Wen Lambo?\n` +
      `Try it yourself and share your destiny:\n\n` +
      `👉 union-fortune.vercel.app\n\n` +
      `#Union #CryptoFortune #CapybaraMagic`;
    const url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    window.open(url, '_blank');
  };
       }
