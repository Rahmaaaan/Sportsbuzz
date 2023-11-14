//jshint esversion:6

var username;
var emailid;
var emailpassword;
var orderdetails;
//  varable declations
var product_name;
var product_id;
var images;
var imggg;
var product_1 = {
  name: " ",
  img1: " ",
  img2: " ",
  img3: " ",
  buyPrice: " ",
  delprice: 1,
};
var ProductsNames = {
  name1: "no ",
  name2: "rackets",
  name3: "blank",
  name4: "blank",
  img1: "",
  img2: " ",
  img3: " ",
  img4: " ",
  des1: " ",
  des2: " ",
  des3: " ",
  des4: " ",
  price1: " ",
  price2: " ",
  price3: " ",
  price4: " ",
};

//
//

//  config files and headers
const express = require("express");
var some = "badmintion shoes";
const https = require("https");
const bodyParser = require("body-parser");
let ejs = require("ejs");
const app = express();
// using ejs
app.set("view engine", "ejs");

//  mongodb connections
const mongoose = require("mongoose");
const { setMaxIdleHTTPParsers } = require("http");
mongoose.connect("mongodb://localhost:27017/sprotsbuzz", {
  useNewUrlParser: true,
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extented: true }));
app.use(express.json());

app.use(express.static(__dirname));

// app  statments

// mongo db new schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// login page get funtion
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

// login page post funtion
app.post("/", function (req, res) {
  username = req.body.name;
  emailid = req.body.email;
  emailpassword = req.body.password;

  const user = new User({
    name: username,
    email: emailid,
    password: emailpassword,
  });

  // mongo bd find funtion
  User.find(function (err, persons) {
    if (err) {
      console.log(err);
    } else {
      console.log(persons);
    }
  });
  user.save();

  res.redirect("http://localhost:3000/home");
});

// home page get function
app.get("/home", function (req, res) {
  console.log(" \n \n");
  console.log("User With UserName :  " + username + " Is Currently logined. ");
  res.sendFile(__dirname + "/home.html");
});

// home page post function.
app.post("/home", function (req, res) {
  product_name = req.body.name;

  console.log(" \n \n");
  console.log("User With UserName :  " + username + " Is Currently logined. ");

  res.send("thanks for the data ");

  // the first set of  if statments
  // if for badmintion
  if (product_name == "badmintion") {
    // images sort
    ProductsNames.img1 = "Images\\badmintion\\2.jpg";
    ProductsNames.img2 = "Images\\badmintion\\bag1.jpg";
    ProductsNames.img3 = "Images\\badmintion\\rack1.jpg";
    ProductsNames.img4 = "Images\\badmintion\\shoes1.jpg";
    // Name sort
    ProductsNames.name1 = " YONEX MAVIS 350 PRO";
    ProductsNames.name2 = "  YONEX SPDSTER LITE ";
    ProductsNames.name3 = " APACS FINAPI 232 ";
    ProductsNames.name4 = " LI-NING RIA TIHGT PRO";

    // Description

    // price sort
    ProductsNames.price1 = "150";
    ProductsNames.price2 = "700";
    ProductsNames.price3 = "2500";
    ProductsNames.price4 = "3000";
  }

  //   if for cricket
  else if (product_name == "cricket") {
    // images sort
    ProductsNames.img1 = "Images\\cricket\\bat1.jpg";
    ProductsNames.img2 = "Images\\cricket\\ball2.jfif";
    ProductsNames.img3 = "Images\\cricket\\h4.jfif";
    ProductsNames.img4 = "Images\\cricket\\w2.jfif";
    // Name sort
    ProductsNames.name1 = " MRF FROZEN FIRE  ";
    ProductsNames.name2 = " MRF BOLT MAX ";
    ProductsNames.name3 = " MRF KIN SAND ";
    ProductsNames.name4 = " MRF PRO DEL PADS";

    // Description

    // price sort
    ProductsNames.price1 = "1500";
    ProductsNames.price2 = "350";
    ProductsNames.price3 = "700";
    ProductsNames.price4 = "1200";
  }
  // if for basketball
  else if (product_name == "basketball") {
    // images sort
    ProductsNames.img1 = "Images\\basketball\\b3.jpg";
    ProductsNames.img2 = "Images\\basketball\\bas1.jpg";
    ProductsNames.img3 = "Images\\basketball\\net1.jpg";
    ProductsNames.img4 = "Images\\basketball\\j4.jfif";
    // Name sort
    ProductsNames.name1 = " JORDANS AIRS MAX";
    ProductsNames.name2 = " ADIDAS SOUL TOUCH";
    ProductsNames.name3 = " SHAQ BACKBORD NET ";
    ProductsNames.name4 = " Kobe Bryant Limited edition Jersery ";

    // Description

    // price sort
    ProductsNames.price1 = "7000";
    ProductsNames.price2 = "1350";
    ProductsNames.price3 = "2999";
    ProductsNames.price4 = "10000";
  }
  // if for hockey
  else if (product_name == "hockey") {
    // images sort
    ProductsNames.img1 = "Images\\hockey\\hoc1.jpg";
    ProductsNames.img2 = "Images\\hockey\\hockeyhel3.jpg";
    ProductsNames.img3 = "Images\\hockey\\hball3.jpg";
    ProductsNames.img4 = "Images\\hockey\\hockeysho4.jpg";
    // Name sort
    ProductsNames.name1 = " LIN-LING BLAZE K ";
    ProductsNames.name2 = " LIN-LING BLAZE HEL ";
    ProductsNames.name3 = " LIN-LING BLAZE C ";
    ProductsNames.name4 = " LIN-LING AIR MAX";

    // Description

    // price sort
    ProductsNames.price1 = "1500";
    ProductsNames.price2 = "5999";
    ProductsNames.price3 = "999";
    ProductsNames.price4 = "1333";
  }

  // if Soccer
  else if (product_name == "soccer") {
    // images sort
    ProductsNames.img1 = "Images\\scoccer\\football1.jpg";
    ProductsNames.img2 = "Images\\scoccer\\foot1.jpg";
    ProductsNames.img3 = "Images\\scoccer\\b3.jpg";
    ProductsNames.img4 = "Images\\scoccer\\j2.jpg";
    // Name sort
    ProductsNames.name1 = " ADIDAS M CHIPS ";
    ProductsNames.name2 = " COSCO ART H'S ";
    ProductsNames.name3 = " ADIDAS RM BRIHGT";
    ProductsNames.name4 = " ADIDAS Messi Jersery ";

    // Description

    // price sort
    ProductsNames.price1 = "4999";
    ProductsNames.price2 = "1499";
    ProductsNames.price3 = "2999";
    ProductsNames.price4 = "999";
  }
}); //end of the if statments

// product page get funtion.

app.get("/Products", (req, res) => {
  console.log(" Catagory " + product_name + " was selected by " + username);

  // rendering the products
  res.render("products", {
    product1name: ProductsNames.name1,
    product2name: ProductsNames.name2,
    product3name: ProductsNames.name3,
    product4name: ProductsNames.name4,
    img1: ProductsNames.img1,
    img2: ProductsNames.img2,
    img3: ProductsNames.img3,
    img4: ProductsNames.img4,
    price1: ProductsNames.price1,
    price2: ProductsNames.price2,
    price3: ProductsNames.price3,
    price4: ProductsNames.price4,
  });
});

// post request doe products
app.post("/products", (req, res) => {
  product_id = req.body.name;

  res.send("THank you for the Data");

  // checking if badmintion is clicked
  if (product_name == "badmintion") {
    // if its the first product
    if (product_id == "1") {
      (product_1.name = ProductsNames.name1),
        (product_1.buyPrice = ProductsNames.price1),
        (product_1.delprice = parseInt(ProductsNames.price1) + 500),
        (product_1.img1 = "\\" + ProductsNames.img1),
        (imggg = ProductsNames.img1.length),
        (images = ProductsNames.img1.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "4.jpg");
    }

    // if its the secound product
    else if (product_id == "2") {
      (product_1.name = ProductsNames.name2),
        (product_1.buyPrice = ProductsNames.price2),
        (product_1.delprice = parseInt(ProductsNames.price2) + 1574),
        (product_1.img1 = "\\" + ProductsNames.img2),
        (imggg = ProductsNames.img2.length),
        (images = ProductsNames.img2.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "3.jpg");
    }

    // if its the third product
    else if (product_id == "3") {
      (product_1.name = ProductsNames.name3),
        (product_1.buyPrice = ProductsNames.price3),
        (product_1.delprice = parseInt(ProductsNames.price3) + 1542),
        (product_1.img1 = "\\" + ProductsNames.img3),
        (imggg = ProductsNames.img3.length),
        (images = ProductsNames.img3.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "3.jpg");
    }

    // if its the 4th product
    else if (product_id == "4") {
      console.log("yo its working ");
      (product_1.name = ProductsNames.name4),
        (product_1.buyPrice = ProductsNames.price4),
        (product_1.delprice = parseInt(ProductsNames.price4) + 1153),
        (product_1.img1 = "\\" + ProductsNames.img4),
        (imggg = ProductsNames.img4.length),
        console.log(ProductsNames.img4.substring(imggg - 4, imggg));
      (images = ProductsNames.img4.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jfif"),
        (product_1.img3 = "\\" + images + "4.jfif");
    }
  }
  // end of if statment else if cricket
  else if (product_name == "cricket") {
    // if cricket first product
    if (product_id == "1") {
      (product_1.name = ProductsNames.name1),
        (product_1.buyPrice = ProductsNames.price1),
        (product_1.delprice = parseInt(ProductsNames.price1) + 1500),
        (product_1.img1 = "\\" + ProductsNames.img1),
        (imggg = ProductsNames.img1.length),
        (images = ProductsNames.img1.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jfif"),
        (product_1.img3 = "\\" + images + "4.jpg");
    }
    // if cricket secound product
    else if (product_id == "2") {
      (product_1.name = ProductsNames.name2),
        (product_1.buyPrice = ProductsNames.price2),
        (product_1.delprice = parseInt(ProductsNames.price2) + 1469),
        (product_1.img1 = "\\" + ProductsNames.img2),
        (imggg = ProductsNames.img2.length),
        (images = ProductsNames.img2.substring(0, imggg - 6)),
        (product_1.img2 = "\\" + images + "1.jfif"),
        (product_1.img3 = "\\" + images + "3.jfif");
    }
    // if cricket  3rd product
    else if (product_id == "3") {
      (product_1.name = ProductsNames.name3),
        (product_1.buyPrice = ProductsNames.price3),
        (product_1.delprice = parseInt(ProductsNames.price3) + 6645),
        (product_1.img1 = "\\" + ProductsNames.img3),
        (imggg = ProductsNames.img3.length),
        (images = ProductsNames.img3.substring(0, imggg - 6)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "3.jfif");
    }

    // if cricket 4th product
    else if (product_id == "4") {
      (product_1.name = ProductsNames.name4),
        (product_1.buyPrice = ProductsNames.price4),
        (product_1.delprice = parseInt(ProductsNames.price4) + 1635),
        (product_1.img1 = "\\" + ProductsNames.img4),
        (imggg = ProductsNames.img4.length),
        console.log(ProductsNames.img4.substring(imggg - 4, imggg));
      (images = ProductsNames.img4.substring(0, imggg - 6)),
        (product_1.img2 = "\\" + images + "3.jfif"),
        (product_1.img3 = "\\" + images + "4.jpeg");
    }
  }

  // end of the else if statment

  // if basketball
  else if (product_name == "basketball") {
    // if basketball first product
    if (product_id == "1") {
      (product_1.name = ProductsNames.name1),
        (product_1.buyPrice = ProductsNames.price1),
        (product_1.delprice = parseInt(ProductsNames.price1) + 1542),
        (product_1.img1 = "\\" + ProductsNames.img1),
        (imggg = ProductsNames.img1.length),
        (images = ProductsNames.img1.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jfif"),
        (product_1.img3 = "\\" + images + "4.jfif");
    }
    // if basketball 2nd product
    else if (product_id == "2") {
      (product_1.name = ProductsNames.name2),
        (product_1.buyPrice = ProductsNames.price2),
        (product_1.delprice = parseInt(ProductsNames.price2) + 1368),
        (product_1.img1 = "\\" + ProductsNames.img2),
        (imggg = ProductsNames.img2.length),
        (images = ProductsNames.img2.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jfif"),
        (product_1.img3 = "\\" + images + "3.jfif");
    }
    // if  basketball 3rd product
    else if (product_id == "3") {
      (product_1.name = ProductsNames.name3),
        (product_1.buyPrice = ProductsNames.price3),
        (product_1.delprice = parseInt(ProductsNames.price3) + 1664),
        (product_1.img1 = "\\" + ProductsNames.img3),
        (imggg = ProductsNames.img3.length),
        (images = ProductsNames.img3.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "3.jfif");
    }

    // if basketball 4th product
    else if (product_id == "4") {
      (product_1.name = ProductsNames.name4),
        (product_1.buyPrice = ProductsNames.price4),
        (product_1.delprice = ProductsNames.price4 + 1987),
        (product_1.img1 = "\\" + ProductsNames.img4),
        (imggg = ProductsNames.img4.length),
        console.log(ProductsNames.img4.substring(imggg - 4, imggg));
      (images = ProductsNames.img4.substring(0, imggg - 6)),
        (product_1.img2 = "\\" + images + "3.jfif"),
        (product_1.img3 = "\\" + images + "2.jfif");
    }
  } else if (product_name == "soccer") {
    // if scoccer first product
    if (product_id == "1") {
      (product_1.name = ProductsNames.name1),
        (product_1.buyPrice = ProductsNames.price1),
        (product_1.delprice = parseInt(ProductsNames.price1) + 1681),
        (product_1.img1 = "\\" + ProductsNames.img1),
        (imggg = ProductsNames.img1.length),
        (images = ProductsNames.img1.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "4.jfif");
    }
    // if scoccer 2nd product
    else if (product_id == "2") {
      (product_1.name = ProductsNames.name2),
        (product_1.buyPrice = ProductsNames.price2),
        (product_1.delprice = parseInt(ProductsNames.price2) + 1500),
        (product_1.img1 = "\\" + ProductsNames.img2),
        (imggg = ProductsNames.img2.length),
        (images = ProductsNames.img2.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jfif"),
        (product_1.img3 = "\\" + images + "3.jfif");
    }
    // if  scoccer 3rd product
    else if (product_id == "3") {
      (product_1.name = ProductsNames.name3),
        (product_1.buyPrice = ProductsNames.price3),
        (product_1.delprice = parseInt(ProductsNames.price3) + 1682),
        (product_1.img1 = "\\" + ProductsNames.img3),
        (imggg = ProductsNames.img3.length),
        (images = ProductsNames.img3.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "1.jpg"),
        (product_1.img3 = "\\" + images + "4.jpg");
    }

    // if scoccer 4th product
    else if (product_id == "4") {
      (product_1.name = ProductsNames.name4),
        (product_1.buyPrice = ProductsNames.price4),
        (product_1.delprice = parseInt(ProductsNames.price4) + 1987),
        (product_1.img1 = "\\" + ProductsNames.img4),
        (imggg = ProductsNames.img4.length),
        console.log(ProductsNames.img4.substring(imggg - 4, imggg));
      (images = ProductsNames.img4.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "3.jpg"),
        (product_1.img3 = "\\" + images + "1.jpg");
    }
  }

  // end of scoccer
  else if (product_name == "hockey") {
    // if Hockey first product
    if (product_id == "1") {
      (product_1.name = ProductsNames.name1),
        (product_1.buyPrice = ProductsNames.price1),
        (product_1.delprice = parseInt(ProductsNames.price1) + 1500),
        (product_1.img1 = "\\" + ProductsNames.img1),
        (imggg = ProductsNames.img1.length),
        (images = ProductsNames.img1.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jpg"),
        (product_1.img3 = "\\" + images + "4.jpg");
    }
    // if Hockey 2nd product
    else if (product_id == "2") {
      (product_1.name = ProductsNames.name2),
        (product_1.buyPrice = ProductsNames.price2),
        (product_1.delprice = parseInt(ProductsNames.price2) + 1782),
        (product_1.img1 = "\\" + ProductsNames.img2),
        (imggg = ProductsNames.img2.length),
        (images = ProductsNames.img2.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "1.jfif"),
        (product_1.img3 = "\\" + images + "2.jpg");
    }
    // if  Hockey 3rd product
    else if (product_id == "3") {
      (product_1.name = ProductsNames.name3),
        (product_1.buyPrice = ProductsNames.price3),
        (product_1.delprice = parseInt(ProductsNames.price3) + 1226),
        (product_1.img1 = "\\" + ProductsNames.img3),
        (imggg = ProductsNames.img3.length),
        (images = ProductsNames.img3.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "2.jfif"),
        (product_1.img3 = "\\" + images + "4.jpg");
    }

    // if Hockey 4th product
    else if (product_id == "4") {
      (product_1.name = ProductsNames.name4),
        (product_1.buyPrice = ProductsNames.price4),
        (product_1.delprice = parseInt(ProductsNames.price4) + 1526),
        (product_1.img1 = "\\" + ProductsNames.img4),
        (imggg = ProductsNames.img4.length),
        console.log(ProductsNames.img4.substring(imggg - 4, imggg));
      (images = ProductsNames.img4.substring(0, imggg - 5)),
        (product_1.img2 = "\\" + images + "3.png"),
        (product_1.img3 = "\\" + images + "2.jpg");
    }
  }
});

app.get("/SportsBuzz/Buy", (req, res) => {
  console.log(
    "The product with the product id : " +
      product_name +
      "##" +
      product_id +
      " Was Clicked By " +
      username
  );
  res.render("Buy", {
    buyimg1: product_1.img1,
    buyimg2: product_1.img2,
    buyimg3: product_1.img3,
    buyitem: product_1.name,
    buyprice: product_1.buyPrice,
    buydelprice: product_1.delprice,
  });
});

app.post("/SportsBuzz/Buy", function (req, res) {
  orderdetails = req.body.name;
  console.log(req.body);
  console.log(orderdetails);

  res.send("yooooo bro nice to mmet you");
});

app.listen(3000, function (res) {
  console.log("Server is running at local host 3000");
});
