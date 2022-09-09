// Setup
function phoneticLookup(val) {
  let result = '';

  const obj = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  };
  result = obj[val];

  // Only change code above this line
  return result;
}

phoneticLookup('charlie');
