//solution 1
function scramble(str, arr) {
  var scramble = [], i;
    for (i = 0; i < str.length; i++) {
        scramble[arr[i]] = str[i];
    }
    return scramble.join('');
};

//clever 

const scramble = (s,ar) => s.split('').reduce((a,e,i,arr) => a + arr[ar.indexOf(i)],'');
