var findDuplicate = function(array) {
 
 var object1 = {};
 for(var i = 0; i < array.length; i++){
   if(!object1[array[i]]){
     object1[array[i]] =1;
   }
   else{
     return array[i];
   }
 }
 
}
