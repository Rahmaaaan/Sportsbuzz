


var checking = {  }

$("#badmintion").click(function (e) { 
   e.preventDefault();
console.log("yo dude this should work i huees ");
   checking={ }
   checking={

      name:"badmintion"
   }
   yo();
   
});

$("#cricket").click(function (e) { 
   e.preventDefault();
 console.log("is this working ?");
   checking={ }
   checking={

      name:"cricket"
   }
   yo();
});

$("#basketball").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"basketball"
   }
   yo();
});

$("#volleyball").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"soccer"
   }
   yo();
});
$("#hockey").click(function (e) { 
   e.preventDefault();

   checking={ }
   checking={

      name:"hockey"
   }
   yo();
});

































function yo (){
  
   fetch("/home",{
method : "POST",
headers : {
'Content-Type':'application/json'
},
body: JSON.stringify(checking)
})


window.open("http://localhost:3000/products","_self");


}









