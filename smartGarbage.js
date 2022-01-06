const bins = {
  waste: 5,
  recycling: 5,
  compost:5
};

function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}

console.log(bins);
smartGarbage('recycling', bins);
console.log(bins);