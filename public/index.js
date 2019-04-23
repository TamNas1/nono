let arr = document.getElementsByClassName('num');
const submitbtn = document.getElementById('solve');

solve.addEventListener("click", () => {
 document.getElementById('results').removeChild(document.getElementById('resultsChild'));
 let y = document.createElement('div');
 document.getElementById('results').appendChild(y);
 y.id = 'resultsChild';
  let newarr = [];
  let e = document.getElementById("selectn");
  let selectn = e.options[e.selectedIndex].text;
  newarr = Array.from(arr).reduce((acc, current) => {
    if (current.value !== "")
      return acc.concat(current.value);
    return acc;
  }, []);

  getCombinations(newarr, selectn, (d) => {
    setTimeout(() => {
      let l = d.length;
      console.log(d);
      document.getElementById('count').textContent = l.toString();
      let i = 0;
      while (i < l) {
        let x = document.createElement('p');
        x.textContent = d[i];
        x.className = "result"
        document.getElementById('resultsChild').appendChild(x)
        i++;
      }
    }, 0)
  });
})

function* choose(l, r = 0, s = -1) {
  if (r <= 0) yield [];
  else
    for (let i = s + 1; i < l.length; i++)
      for (let q of choose(l, r - 1, i)) yield [l[i], ...q];
}

const getCombinations = (l, s, cb) => {
  return cb([...choose(l, s)])
}
