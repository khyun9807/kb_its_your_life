function findRandomPokemon() {
  let num = Math.floor(Math.random() * 10) % 3;

  if (num == 0) {
    return 'GGobugi';
  } else if (num == 1) {
    return 'Lijamong';
  } else {
    return 'Pikachu';
  }
}

console.log(findRandomPokemon());
console.log(findRandomPokemon());
console.log(findRandomPokemon());
