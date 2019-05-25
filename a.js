var y=0;
var x=parseInt(y,10);
var type=document.getElementById('type');
var select =document.getElementById("food");
var number=document.getElementById("numbers");
var j=0;
var k;
var z;
var q;
var m;
var option;
var inde;
var p;
number.style.display="none";
var enter=document.getElementById("enter");
var food={select:0 ,Dosa:6 , Idli:5,Roti:7 ,poori:6, Rice:8 ,pongal:9,Chamiya:10}
  function savefunction(){
  var option=document.createElement("option");
  option.text=enter.value;
    select.add(option);
    var pq=enter.value;
    var carbo=document.getElementById('carbo').value;
    var fat=document.getElementById('fat').value;
    var protien=document.getElementById('protien').value;
    var gnprotien= + protien;
    var gncarbo= + carbo;
    var gnfat= + fat;
    m=gnprotien*2 + gnfat*4 + gncarbo*3;
    food.pq=m;
  
   }
  
var option1=document.createElement("option");

 option1.text="Dosa";
 select.add(option1);
 var option2=document.createElement("option")
 option2.text="Idli";
 select.add(option2);
 var option3=document.createElement("option");
 option3.text="Roti";
 select.add(option3);
 var option4=document.createElement("option");
 option4.text="poori";
 select.add(option4);
 var option5=document.createElement("option");
 option5.text="Rice";
 select.add(option5);
 var option6=document.createElement("option");
 option6.text="pongal";
 select.add(option6);
 var option7=document.createElement("option");
 option7.text="Chamiya";
 select.add(option7);


function appear(y){
  document.getElementById('enter').value="";
    document.getElementById('protien').value="";
    document.getElementById('carbo').value="";
    document.getElementById('fat').value="";  
    if(select.selectedIndex!=0){
      number.style.display="block";
    }
    
        if(y.value<=4 || type.selectedIndex==1){
            document.getElementById('numbers').placeholder="quantity";
             }
        else if(y.value>4 || type.selectedIndex==2){
            document.getElementById('numbers').placeholder="grams";
            }
    type.selectedIndex=0;
     }
 function myfunction(){
c=0;
var gnheight=document.getElementById('height').value;
var height=  + gnheight;
var gnweight=document.getElementById('weight').value;
var weight= + gnweight;
    if(gnheight.length==0|| gnweight.length==0)
    {
        alert("enter");
     }
     else
      {   
        var BMI= ((weight*100*100)/(height*height));
        if(BMI<18)
        {
           alert("underweight");
           calories.textContent=6
         }
        else if(BMI>18 && BMI <24)
        {
           alert("normal");
           calories.textContent=2300
         }
         else if(BMI>24 && BMI<=30)
        {
           alert("Overweight");
           calories.textContent=2200
         }
         else if(BMI>30 && BMI <100)
        {
          alert("Obesse");
          calories.textContent=2100
         }
      }
}

  function subfunction(){
    document.getElementById('numbers').placeholder="grams";
    var number=document.getElementById('numbers').value;
    if(number.length==0)
     {
       }
    else
     {  
       var gnnumber= + number;
       k=select.selectedIndex;
       var versatile=rock(k,gnnumber);
     }
    select = document.getElementById('food');
    
    type.selectedIndex=0;
    enter.value="" 
   
    document.getElementById('numbers').value = "";
    document.getElementById('carbo').value="";
    document.getElementById('fat').value="";
 }
function rock(ind, quantity)
{    
  var table=document.getElementById('ordered');
  var na=select[ind].text;
  this.quantity=quantity;
  
  
  if(select.selectedIndex!=0 && quantity!=0){
  var row = table.insertRow(1);
  var cel1=row.insertCell(0);
  var cel2=row.insertCell(1);
  cel1.innerHTML=na;
  this.ind=ind;
  cel2.innerHTML=quantity;
  var t= food[Object.keys(food)[ind]];
  x=x+quantity*t;
  a.textContent=x;
  
}}
