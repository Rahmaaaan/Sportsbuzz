var checking = {};

$("#1").click(function (e) {
  console.log("yo dude i thnk this should work.");
  checking = {};
  checking = {
    name: "1",
  };
  yo();
});

$("#2").click(function (e) {
  checking = {};
  checking = {
    name: "2",
  };
  yo();
});

$("#3").click(function (e) {
  checking = {};
  checking = {
    name: "3",
  };
  yo();
});

$("#4").click(function (e) {
  checking = {};
  checking = {
    name: "4",
  };
  yo();
});

function yo() {
  fetch("/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(checking),
  });

  window.open("http://localhost:3000/SportsBuzz/Buy", "_self");
}
