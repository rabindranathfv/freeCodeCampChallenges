// SOLUTION 1

function pairElement(str) {
  let strSplited = str.split('');
  console.log(strSplited);
  let answer = [];
  for(let index= 0; index < strSplited.length; index++) {
    console.log(strSplited[index]);
    switch (strSplited[index]) {
      case 'A':
        // find A insert "AT"
        answer.push(['A', 'T']);
        break;
      case 'T':
      // find A insert "TA"
        answer.push(['T', 'A']);
        break;
      case 'C':
      // find C insert "CG"
        answer.push(['C', 'G']);
        break;
      case 'G':
      // find G insert "AT"
        answer.push(['G', 'C']);
        break;
    }

  }
  return answer;
}

pairElement("GCG");
