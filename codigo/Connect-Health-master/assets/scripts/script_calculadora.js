"Tmb" [
  {
      "id": 1,
      "Sexo": "Masculino",
      "Idade": "19",
      "Altura": "177",
      "AtividadeFisica": "Atividade intensa",
  },
  {
    "id": 2,
    "Sexo": "Masculino",
    "Idade": "27",
    "Altura": "187",
    "AtividadeFisica": "Sedentario",
  },
  {
    "id": 3,
    "Sexo": "Feminino",
    "Idade": "57",
    "Altura": "156",
    "AtividadeFisica": "Atividade muito intensa",
  }
]


const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
  event.preventDefault();

  const genero = getSelectedValue('genero');
  const idade = getInputNumberValue('idade');
  const peso = getInputNumberValue('peso');
  const altura = getInputNumberValue('altura');
  const nivelAtividade = getSelectedValue('nivelAtividade');

  const tmb = Math.round(
    genero === 'feminino'
    ? (655 + (9.6 * peso) + (1.8 * altura) - (4.7 *idade)) 
    : (66 + (13.7 * peso) + (5 * altura) - (6.8 *idade))
  );

  const maintenance = Math.round(tmb * Number(nivelAtividade));
  const loseWeight = maintenance - 600;
  const gainWeight = maintenance + 500; 
  const setWeight = maintenance;
  const layout = `
    <h2>Sua taxa metabolica basal:</h2>

    <div class="result-content">
      <ul>
        <li>
          Sua taxa metabolica basal sem fazer nada ao dia <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Sua taxa metabolica basal com exercícios ou se mexendo ao dia <strong>${setWeight} calorias</strong>.
        </li>
        <li>
          Para manter você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganho de massa você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
  `;

  const result = document.getElementById('result');

  result.innerHTML = layout; 
}

function getSelectedValue(id) {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}