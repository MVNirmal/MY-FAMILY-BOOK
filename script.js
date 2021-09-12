var updatename = [" MY FATHER R.MURUGANANDAN", " MY MOTHER M.VIJAYALAKSHMI", " MYSELF M.V.NIRMAL", "MY FAMILY BOOK"];
var currentname = "";
var updateimage = ['https://ibb.co/31zVzLw', 'https://ibb.co/41RH29Z', 'https://ibb.co/hZSGdGH'] 


function f1() {
currentname = updatename[0];
console.log(currentname); 
document.getElementById("name").innerHTML=currentname;
document.getElementById("image").src= 'https://images.app.goo.gl/Lz6Lsi8YqMzpcmDFA' ;

  
    }

function f2() {
currentname = updatename[1]
console.log(currentname); 
document.getElementById("name").innerHTML=currentname;  
document.getElementById("image").src= 'https://images.app.goo.gl/ua9TZy72NmnXxJYc6' ;

 }  


function f3() {
  currentname = updatename[2];
console.log(currentname); 
document.getElementById("name").innerHTML=currentname;  
document.getElementById("image").src= 'https://images.app.goo.gl/5hyJSdiSZESdETaN7' ;
}

function home() {
    currentname = updatename[3];
  console.log(currentname); 
  document.getElementById("name").innerHTML=currentname;  
  document.getElementById("image").src= 'https://images.app.goo.gl/koYc9wcne8jsF6UT6' ;
  }