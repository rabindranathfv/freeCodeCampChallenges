// ES5 Solution

function convertHTML(str) {
  var answer = str.split('');

  // Since we are only checking for a few HTML elements I used a switch
  for (var i = 0; i < answer.length; i++) {
    switch (answer[i]) {
      case '"':
        answer[i] = '&quot;';
        break;
      case '<':
        answer[i] = '&lt;';
        break;
      case '&':
        answer[i] = '&amp;';
        break;
      case '>':
        answer[i] = '&gt;';
        break;
      case "'":
        answer[i] = "&apos;";
        break;
    }
  }

  answer = answer.join('');
  return answer;
}
convertHTML("Dolce & Gabbana");
