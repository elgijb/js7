const maleNames = ["Иван", "Алексей", "Дмитрий", "Сергей", "Павел", "Николай"];
const maleSurnames = ["Иванов", "Петров", "Сидоров", "Кузнецов", "Смирнов", "Егоров"];
const femaleNames = ["Анна", "Мария", "Екатерина", "Елена", "Ольга", "Татьяна"];
const femaleSurnames = ["Иванова", "Петрова", "Сидорова", "Кузнецова", "Смирнова", "Егорова"];
const professions = ["инженер", "врач", "учитель", "программист", "дизайнер", "повар", "музыкант"];

const button = document.getElementById("createBtn");
const resultDiv = document.querySelector(".result");
const genderCheck = document.getElementById("genderCheck");


button.addEventListener("click", () => {
  const isFemale = genderCheck.checked;
  const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const age = Math.floor(Math.random() * (60 - 18 + 1)) + 18;

  const character = {
    "Имя": isFemale ? random(femaleNames) : random(maleNames),
    "Фамилия": isFemale ? random(femaleSurnames) : random(maleSurnames),
    "Возраст": age,
    "Профессия": random(professions),
    "Пол": isFemale ? "Жен." : "Муж."
  };

  const block = document.createElement("div");
  block.classList.add("character");

  for (let key in character) {
    const p = document.createElement("p");
    p.textContent = `${key}: ${character[key]}`;
    block.appendChild(p);
  }

  resultDiv.appendChild(block);
});
