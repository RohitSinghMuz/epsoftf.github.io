var data = [
  {
    id: "123-s2-546",
    name: "John Jacobs",
    items: ["bucket", "bottle"],
    address: "1st Cross, 9th Main, abc Apartment",
    pincode: "5xx012",
  },
  {
    id: "123-s3-146",
    name: "David Mire",
    items: ["Bedroom Set"],
    address: "2nd Cross, BTI Apartment",
    pincode: "4xx012",
  },
  {
    id: "223-a1-234",
    name: "Soloman Marshall",
    items: ["bottle"],
    address: "Riverbed Apartment",
    pincode: "4xx032",
  },
  {
    id: "121-s2-111",
    name: "Ricky Beno",
    items: ["Mobile Set"],
    address: "Sunshine City",
    pincode: "5xx072",
  },
  {
    id: "123-p2-246",
    name: "Sikander Singh",
    items: ["Air Conditioner"],
    address: "Riverbed Apartment",
    pincode: "4xx032",
  },
  {
    id: "b23-s2-321",
    name: "Ross Wheeler",
    items: ["Mobile"],
    address: "1st Cross, 9th Main, abc Apartement",
    pincode: "5xx012",
  },
  {
    id: "113-n2-563",
    name: "Ben Bish",
    items: ["Kitchen Set", "Chair"],
    address: "Sunshine City",
    pincode: "5xx072",
  },
  {
    id: "323-s2-112",
    name: "John Michael",
    items: ["Refrigerator"],
    address: "1st Cross, 9th Main, abc Apartement",
    pincode: "5xx012",
  },
  {
    id: "abc-34-122",
    name: "Jason Jordan",
    items: ["Mobile"],
    address: "Riverbed Apartment",
    pincode: "4xx032",
  },
];
var card = " ";
var value = " ";
data.map((elem) => {
  console.log(elem.id);
  value += ` <div class="addre myelem">
  <h4 >${elem.id}</h4>
  <p >${elem.name}</p>
  <p >${elem.address}</p>
  <p >${elem.pincode}</p>
</div>
  `;
  document.getElementById("cards").innerHTML = value;
});

function myFunction() {
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("myelem");
  var k = x.length;
  for (i = 0; i < k; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "inline";
    }
  }
}
function focusFunction() {
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("myelem");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
      document.getElementById("demo").innerHTML = "No User Found";
    } else {
      x[i].style.display = "none";
      document.getElementById("demo").innerHTML = "No User Found";
    }
  }
}

function blurFunction() {
  let input = document.getElementById("myInput").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("myelem");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "inline";
      document.getElementById("demo").innerHTML = "No User Found";
    } else {
      x[i].style.display = "inline";
    }
  }
}

var closebtns = document.getElementsByClassName("close");
var y;

for (y = 0; y < closebtns.length; y++) {
  closebtns[y].addEventListener("click", function () {
    this.parentElement.style.display = " ";
  });
}
