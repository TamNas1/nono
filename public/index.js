let arr = document.getElementsByClassName('num');
const submitbtn = document.getElementById('solve');
let newarr = [];

solve.addEventListener("click", () => {
  document.getElementById('count').textContent = "Possibilities: ";
  document.getElementById('countinput').textContent = "Inputs: ";
 document.getElementById('results').removeChild(document.getElementById('resultsChild'));
 let y = document.createElement('div');
 let z = document.createElement('hr');
 y.appendChild(z)
 document.getElementById('results').appendChild(y);
 y.id = 'resultsChild';

  let e = document.getElementById("selectn");
  let selectn = e.options[e.selectedIndex].text;
  newarr = Array.from(arr).reduce((acc, current) => {
    if (current.value !== "")
      return acc.concat(current.value);
    return acc;
  }, []);
let flag = true;
  getCombinations(newarr, selectn, (d) => {
    if(newarr.length > 5){
      setTimeout(() => {
        let l = d.length;
        document.getElementById('countinput').textContent += newarr.length;
        console.log(d);
        document.getElementById('count').textContent += l.toLocaleString('en').toString();
        let i = 0;
        while (i < l) {
          let x = document.createElement('p');
          x.textContent = d[i];
          x.className = flag ? "result1" : "result2";
          flag ? flag=false :flag=true;

          document.getElementById('resultsChild').appendChild(x)
          x.appendChild(document.createElement('hr'))
          i++;
        }
      }, 0)
    }else{
      document.getElementById('count').textContent += "0";
      document.getElementById('countinput').textContent += newarr.length;
    }

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
document.getElementById('clear').addEventListener("click",()=>{
  document.getElementById('results').removeChild(document.getElementById('resultsChild'));
  let y = document.createElement('div');
  document.getElementById('results').appendChild(y);
  document.getElementById('count').textContent = "Possibilities: ";
  document.getElementById('countinput').textContent = "Inputs: ";
  for(let i = 0;i<arr.length;i++){
    arr[i].value = '';
  }
})
