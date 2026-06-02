const questions = [
  {
    text: "(Si) Le consantement n'existe pas chez les animaux, alors tout les mâles sont des violeurs.",
    points: [0, 1, 2, 3, 5]
  },
  {
    text: "La société occidentale est la plus discriminante et opressante pour les minorité de s'elle ci.",
    points: [-2, -1, 0, 2, 4]
  },
  {
    text: "En temps que minorité (ou allié) je cherche simplement à vivre sans avoir le besoin de me faire remarquer ou représenter plus que les autres (non issue de minorité).",
    points: [3, 2, 0, -1, -3]
  },
  {
    text: "Etre en temps que minorité (ou allié) est une fierté pour moi.",
    points: [-1, 0, 0, 2, 4]
  },
  {
    text: "Il est important que la question du genre ou de l'attirence sexuel des minorités soit abordé dans un contexte ou s'elle de la majorité n'es pas abordé (comme à l'école).",
    points: [0, 0, 1, 2, 3]
  },
  {
    text: "La violence est nécessaire pour faire avancer la société dans la direction que je souhaite.",
    points: [0, 0, 0, 3, 5]
  },
  {
    text: "L'assasina de Charlie Kirck est mérité ou justifier.",
    points: [0, 1, 2, 3, 5]
  },
  {
    text: "Ne pas réveler etre trans a un partenaire (genre opposé, meme sexe), meme si celui ci a préciser ne pas etre attirer par les personnes du meme sexe est un viol.",
    points: [3, 1, 1, 1, 0]
  },
  {
    text: "Les personnes issues de minorité (genre, ethnique, attirance, ect) sont de maniere générale plus gentille et appréciable.",
    points: [0, 0, 0, 2, 4]
  },
  {
    text: "J'ai dans mes valeurs la paix et l'amitié mais je refuse d'etre amis avec quelqu'un qui n'est pas de mon avis sur la questions des minorités, et je peux me montrer violent (verbalement ou physiquement) avec selon la situation.",
    points: [-3, -1, 0, 2, 4]
  },
  {
    text: "Les blancs sont responsable de la majorité des problemmes sur terre.",
    points: [-2, -1, 0, 3, 5]
  },
  {
    text: "Les femmes n'ont aucun avantage par rapports aux hommes dans la société occidentale.",
    points: [-2, -1, 0, 2, 5]
  },
  {
    text: "Une grosse partie des gens ont des idées de Nazis.",
    points: [0, 1, 2, 3, 5]
  },
  {
    text: "Je reverais d'un monde ou aucune discrimination existe mais qu'en contrepartie il ne soit pas normal de mettre en avant ses differences de façon differentes des non issues de minorités (ex : la pride, les drapeau, ect).",
    points: [3, 1, 0, -2, -4]
  },
  {
    text: "Les discriminations que subissent les minorités sont issue en majorité de quelques individu et integriste et non generalisé à toute la société ?.",
    points: [2, 1, 0, -2, -3]
  },
  {
    text: "La non representation de certaines minorités est INACCEPTABLE.",
    points: [0, 0, 0, 1, 3]
  },
  {
    text: "Pas besoin que mes differences soit reconnu et accepter par tout le monde tant qu'elles sont simplement tolerer, meme si j'ai besoin d'expliquer ce que c'est à chaque rencontre.",
    points: [2, 2, 1, -2, -4]
  },
  {
    text: "Je reconnais que la haine qui vient des minorités est rarement une reaction a une haine exterieur contre cette minorité.",
    points: [2, 1, 0, -1, -2]
  },
  {
    text: "J'aimerais bien vivre dans une société traditionnel tant que ma 'difference' est tolerer ou solutionner (par ex : etre une femme cis, l'homosexualité banalisé, l'égalité de genre).",
    points: [2, 1, 0, -1, -2]
  },
  {
    text: "Les femmes sont privilgier dans notre société sur beaucoups d'aspets comme l'attention, l'amour, qu'elle recoivent et autre agissement qui pour un homme ne serait pas tolerer ou mal vue.",
    points: [2, 1, 0, -2, -4]
  },
  {
    text: "Les hommes sont privilgier dans notre société sur beaucoups d'aspets comme l'attention, l'amour, qu'ils recoivent et autre agissement qui pour une femme ne serait pas tolerer ou mal vue.",
    points: [-4, -2, 0, 2, 4]
  },
  {
    text: "Quand je pense avoir raison sans hésitation (sur un sujet ou les avis divergent, genre pas 1+1=2), ceux qui ne sont pas d'accord avec moi on tord et/ou sont de tres mauvaise personne (moralement).",
    points: [-2, -1, 0, 2, 4]
  },
  {
    text: "J'aime imposé des sous culture issue de minorité (ex : dire qu'un personnage fictif est trans ou gay) et si cela derange quelqu'un (exe : le createur du personnage) c'est qu'il est haineux et contre cette minorité là.",
    points: [-2, -1, 0, 2, 4]
  },
  {
    text: "Le racisme anti blanc n'existe pas.",
    points: [-4, -3, 0, 3, 5]
  },
  {
    text: "J'ai deja valider certaines pratiques dans d'autres pays (ex : Japon, ou pays musulamn) sous pretexe de tradition, là ou dans mon pays je les considere comme haineuse ou discriminatoire (ex : les zones interdis aux etrangers au japon, ou les rapport homme/femme dans l'islam).",
    points: [0, 1, 0, 2, 3]
  },
  {
    text: "La parité est nécessaire partout dans tout les domaines.",
    points: [-2, -1, 0, 2, 4]
  },
  {
    text: "Le monde serait mieu si seulement les minorités (ou s'elle que je choisi) existais.",
    points: [-5, -3, 0, 1, 2]
  },
  {
    text: "Nous somme responsable des crimes de nos ancetres.",
    points: [-3, 1, 2, 3, 5]
  },
  {
    text: "En tant que minorité (ou allié). Si je dois choisir entre tuer une personne issue d'une minorité, ou une personne non issue d'une minorité, sans avoir d'autre infos je choisi toujours la premiere option non au hasard.",
    points: [-4, -2, 0, 2, 4]
  },
  {
    text: "Si je dois choisir entre tuer une personne issue de ma couleure de peau, ou une personne autre, sans avoir d'autre infos je choisi la premiere option non au hasard.",
    points: [4, 2, 0, -1, -2]
  },
  {
    text: "Je prefere que la guerre continue jusqu'a la victoire de la Palestine plutot qu'Israel annexe la Gaza, finisse donc la guerre et qu'il n'y ai plus aucun mort des deux coté.",
    points: [-3, -2, 0, 4, 5]
  },
  {
    text: "Les blancs sont plus criminels et dangereux que les noirs.",
    points: [-2, -1, 0, 2, 4]
  },
  {
    text: "Mettre en place ma société ideal par la force et la peur est mieu qu'une société que je considere 'fasciste' mais arriver démocratiquement.",
    points: [-2, -1, 0, 3, 5]
  },
  {
    text: "Si quelqu'un se sent visé par acab ou all men, c'est qu'il fait partie du problemme.",
    points: [0, 1, 0, 2, 4]
  },
  {
    text: "J'ai une haine envers les hommes blanc de façon générale mais je pense qu'il ne faut pas generalisé les actes comis par les noirs et les arabes.",
    points: [0, 0, 0, 3, 5]
  },
  {
    text: "La majorité des gens qui ne pensent pas comme moi on un avis different lier à leur haines.",
    points: [-2, -1, 0, 1, 3]
  }
];

function seededRandom(seed) {
  var x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function shuffleArraySeeded(array, seed) {
  let arr = array.slice(); // copie pour ne pas modifier l'original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(seed + i) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const seed = 12345; // changer ce nombre pour un autre ordre fixe
const questionsShuffled = shuffleArraySeeded(questions, seed);

let currentQuestion = 0;
let answers = new Array(questionsShuffled.length).fill(null);

function showQuestion(index) {
  const questionBox = document.getElementById("questionBox");
  questionBox.innerHTML = "";

  const q = questionsShuffled[index];
  const title = document.createElement("h2");
  title.textContent = `Question ${index + 1} / ${questionsShuffled.length}`;
  questionBox.appendChild(title);

  const text = document.createElement("p");
  text.textContent = q.text;
  questionBox.appendChild(text);

  const options = ["Très pas d'accord", "Pas d'accord", "Neutre", "D'accord", "Très d'accord"];

  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-row");

  options.forEach((opt, i) => {
    const id = `q${index}_opt${i}`;
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = i;
    input.id = id;

    if (answers[index] === i) {
      input.checked = true;
    }

    input.addEventListener("change", () => {
      answers[index] = i;
      toggleButtons();
    });

    const lbl = document.createElement("label");
    lbl.htmlFor = id;
    lbl.textContent = opt;

    const span = document.createElement("span");
    span.classList.add("option");
    span.appendChild(input);
    span.appendChild(lbl);

    optionsContainer.appendChild(span);
  });

  questionBox.appendChild(optionsContainer);

  document.getElementById("prevBtn").style.display = (index === 0) ? "none" : "inline-block";
  document.getElementById("nextBtn").style.display = (index === questionsShuffled.length - 1) ? "none" : "inline-block";
  document.getElementById("submitBtn").style.display = (index === questionsShuffled.length - 1) ? "inline-block" : "none";

  toggleButtons();
}

function toggleButtons() {
  const hasAnswer = answers[currentQuestion] !== null;

  if (currentQuestion < questionsShuffled.length - 1) {
    document.getElementById("nextBtn").disabled = !hasAnswer;
  } else {
    document.getElementById("submitBtn").disabled = !hasAnswer;
  }
}

function calculateResult() {
  let total = 0;
  let unanswered = [];

  questionsShuffled.forEach((q, index) => {
    if (answers[index] !== null) {
      total += q.points[answers[index]];
    } else {
      unanswered.push(index + 1);
    }
  });

  if (total < 1) total = 0;

  const quizContainer = document.getElementById("quizContainer");
  const resultDiv = document.getElementById("result");

  if (unanswered.length > 0) {
    resultDiv.innerHTML = `<p>⚠️ Tu n’as pas répondu à la/aux question(s) : ${unanswered.join(", ")}</p>`;
  } else {
    quizContainer.innerHTML = "";

    const scoreBox = document.createElement("div");
    scoreBox.style.textAlign = "center";
    scoreBox.style.padding = "50px";
    scoreBox.style.background = "rgba(255,255,255,0.9)";
    scoreBox.style.borderRadius = "16px";
    scoreBox.style.maxWidth = "400px";
    scoreBox.style.margin = "100px auto";
    scoreBox.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";

    const scoreTitle = document.createElement("h1");
    scoreTitle.textContent = "Ton score final";
    const scoreValue = document.createElement("h2");
    scoreValue.textContent = total;
    scoreValue.style.color = "#27ae60";

    scoreBox.appendChild(scoreTitle);
    scoreBox.appendChild(scoreValue);

    const desc = document.createElement("p");
    desc.style.marginTop = "20px";
    desc.style.fontSize = "1.1em";
    desc.style.color = "#333";
    desc.style.fontWeight = "500";

    if (total >= 0 && total <= 14) {
      desc.textContent = "Tu es l'élite parmis les moins affreux woke.";
    } else if (total > 14 && total <= 28) {
      desc.textContent = "Tu es en bonne voie est presque sans affreux wokisme mais il reste du travail.";
    } else if (total > 28 && total <= 42) {
      desc.textContent = "Tu es mid, ni trop affreux woke, ni assez bas.";
    } else if (total > 42 && total <= 56) {
      desc.textContent = "Tu commence a avoir un affreux wokisme mais tu n'es pas totalement perdu.";
    } else if (total > 56 && total <= 70) {
      desc.textContent = "Ton affreux wokisme devient inquietant, tu es a la limite du point de non retour.";
    } else if (total > 70 && total <= 84) {
      desc.textContent = "T'es un sacré affreux woke, c'est peine perdu pour toi.";
    } else if (total > 84 && total <= 99) {
      desc.textContent = "tu vise les 100 ? ton reve c'est d'etre le + affreux et woke possible bruh.";
    } else if (total > 100 && total <= 112) {
      desc.textContent = "Je ne savais meme pas que c'etait possible de depasser les 100, tu es un monstre d'affreux wokisme.";
    } else if (total > 112 && total <= 126) {
      desc.textContent = "Il n'y a donc aucune limite a l'affreux wokisme ???.";
    } else {
      desc.textContent = "Tu es de tres loin le pire, le plus affreux de toute les woke, la plaie qui condamnera le monde a la devastation.";
    }

    scoreBox.appendChild(desc);
    quizContainer.appendChild(scoreBox);
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentQuestion < questionsShuffled.length - 1 && answers[currentQuestion] !== null) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
});

document.getElementById("submitBtn").addEventListener("click", () => {
  if (answers[currentQuestion] !== null) {
    calculateResult();
  }
});

showQuestion(currentQuestion);
