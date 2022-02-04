//balances teams based on their ELO
export default function elohim(arr) {
  let allCombos = [];
  let len = arr.length;
  let half = Math.ceil(arr.length / 2);
  let halfOfSum =
    arr.reduce(function (acc, obj) {
      return acc + obj.elo;
    }, 0) / 2;

  //creates all possibilities of teams (n choose k)
  function recursionTime(index, combo = []) {
    //base case to push arrays
    if (combo.length === half) {
      return allCombos.push(combo.slice());
    }
    if (combo.length + (len - index + 1) <= half) {
      return;
    }
    recursionTime(index + 1, combo);
    combo.push(arr[index]);
    recursionTime(index + 1, combo);
    combo.pop();
  }
  recursionTime(0, []);
  let closest = Infinity;

  function closeToAverage(arr) {
    let sumOfArr = arr.reduce(function (acc, obj) {
      return acc + obj.elo;
    }, 0);
    if (Math.abs(sumOfArr - halfOfSum) < closest) {
      closest = Math.abs(sumOfArr - halfOfSum);
      return true;
    }
    return false;
  }
  //check sum that's closest to average, store it
  let temp = allCombos.filter((miniArr) => closeToAverage(miniArr));
  let team1 = temp[temp.length - 1];

  //filter team1 out of team2, make sure no repeat teammates
  function difference(a, b) {
    return a.filter(
      function (v) {
        return !this.get(v.elo) || !this.set(v.elo, this.get(v.elo) - 1);
      },
      b.reduce((acc, v) => acc.set(v.elo, (acc.get(v.elo) || 0) + 1), new Map())
    );
  }
  let team2 = difference(arr, team1);

  return [team1, team2];
}
