var y=0;
var x=parseInt(y,10);
var type=document.getElementById('type');
var select =document.getElementById("food");
var j=0;
var k;
var z;
var m;
var inde;
var p;
var price=[0, 9,6,7,8,9,11,13];
var enter=document.getElementById("enter");

var button=document.getElementById("save");
button.addEventListener("click", function(){
	var option=document.createElement("option");
	option.text=enter.value;
    select.add(option);
    var carbo=document.getElementById('carbo').value;
    var fat=document.getElementById('fat').value;
    var protien=document.getElementById('protien').value;
    var gnprotien=parseInt(protien,10);
    var gncarbo=parseInt(carbo, 10);
    var gnfat=parseInt(fat,10);
    m=gnprotien*2 + gnfat*4 + gncarbo*3;
    var g =new hi(m);
   }) 

function hi(z){
	this.z=z;
	price.push(z);
    }

function appear(y){
	document.getElementById('enter').value="";
    document.getElementById('protien').value="";
    document.getElementById('carbo').value="";
    document.getElementById('fat').value="";  
        if(y.value<=4 || type.selectedIndex==1){
            document.getElementById('number').placeholder="quantity";
             }
        else if(y.value>4 || type.selectedIndex==2){
            document.getElementById('number').placeholder="grams";
            }
    type.selectedIndex=0;
     }

var submit=document.querySelector("#submit");
submit.addEventListener("click",  function(){
c=0;
var gnheight=document.getElementById('height').value;
var height= parseInt(gnheight, 10);
var gnweight=document.getElementById('weight').value;
var weight=parseInt(gnweight,10);
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
})

sub.addEventListener("click",function(){
    document.getElementById('number').placeholder="grams";
    var number=document.getElementById('number').value;
    if(number.length==0)
     {
       }
    else
     {  
       var gnnumber=parseInt(number, 10);
       k=select.selectedIndex;
       var versatile=new rock(k,gnnumber);
     }
    select = document.getElementById('food');
    food.selectedIndex=0;
    type.selectedIndex=0;
    enter.value="" 
    document.getElementById('number').value = "";
    document.getElementById('carbo').value="";
    document.getElementById('fat').value="";
 })
function rock(ind, quantity)
{    
	var table=document.getElementById('ordered');
	var na=select[ind].text;
	var row = table.insertRow(p);
	row.textContent=na;
	this.ind=ind;
	this.quantity=quantity;
	var t= price[ind];
	x=x+quantity*t;
	a.textContent=x;
	p=p+1;
}