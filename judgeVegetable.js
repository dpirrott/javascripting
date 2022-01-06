function judgeVegetable(vegetables, metric) {
  let highestRankName = "";
  let highestRank = -1;
  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestRank) {
      highestRank = vegetable[metric];
      highestRankName = vegetable.submitter;
    }
  }
  return highestRankName;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));