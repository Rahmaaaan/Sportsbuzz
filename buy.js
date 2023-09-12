
var productid;
var producttext="Order Placed for : "

productid=$(".Product_name1").text();
var finalproduct=producttext+productid;
function hello()
{
    var checking={

    name:finalproduct,
    
}
   var a=confirm("Are you sure you want to Puchase the product ?")
console.log(a);
if(a==true)
{
   alert("🙂🙂 Thank you for Purchasing ");
   window.open("http://localhost:3000/home","_self")
}else{
    alert("Try Some other Items from the site");
}
  
    fetch("/products",{
 method : "POST",
 headers : {
 'Content-Type':'application/json'
 },
 body: JSON.stringify(checking)
 })
 
 }


function hi()
{
    alert("Product has been added to cart");
    window.open("http://localhost:3000/home","_self")
}