const data = [
  { suit: "Hearts", animal: "Lion", fruit: "Mango", won: true },
  { suit: "Hearts", animal: "Fox", fruit: "Apple", won: false },
  { suit: "Spades", animal: "Lion", fruit: "Mango", won: true },
  { suit: "Hearts", animal: "Lion", fruit: "Apple", won: true },
];

function winRate(data, key, value) {
  let total = 0;
  let wins = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i][key] === value) {
      total++;
      if (data[i].won === true) {
        wins++;
      }
    }
  }

  if (total === 0) return 0;

  return wins / total;
}

function probabilityToBeatBoss(suit, animal, fruit, data) {
  const suitRate = winRate(data, "suit", suit);
  const animalRate = winRate(data, "animal", animal);
  const fruitRate = winRate(data, "fruit", fruit);

  const probability = suitRate * animalRate * fruitRate;

  return (probability * 100).toFixed(1) + "%";
}

console.log(probabilityToBeatBoss("Hearts", "Lion", "Mango", data));
