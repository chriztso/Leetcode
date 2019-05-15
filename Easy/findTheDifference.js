var findTheDifference = function(s, t) {
    if(t.split('').every(function(x){return x === t[0]})){
        return t[t.length-1];
    }
    s = s.split('').sort();
    t = t.split('').sort();
    for(var i = 0; i < t.length; i++){
       if(t[i] !== s[i]){
         return t[i];
       }
    }
}