function ResetForm() {
  document.getElementById("RegForm").reset();
}
// const email_array = [];
// const password_array = [];
// const answer_array = [];
// var items = JSON.parse(localStorage.getItem("registration_details")) || [];
// if (items) {
//   items.map((data, index) => {
//     email_array.push(data.email);
//     password_array.push(data.password);
//     answer_array.push(data.answer);
//   });
// }
function regirster() {
  // alert("Helo")
  // Check email and password
  const email_array = [];
  const password_array = [];
  const answer_array = [];
  var items = JSON.parse(localStorage.getItem("registration_details")) || [];
  console.log(items)
  if (items) {
    items.map((data, index) => {
      email_array.push(data.email);
      password_array.push(data.password);
      answer_array.push(data.answer);
    });
  }
  // For storing inputs
  // var cred = JSON.parse(localStorage.getItem("registration_details")) || [];
  var reg_username = document.querySelector("#reg_username").value;
  var reg_email = document.querySelector("#reg_email").value;
  var reg_password = document.querySelector("#reg_password").value;
  var reg_confirm_password = document.querySelector(
    "#reg_confirm_password"
  ).value;
  if (
    reg_username === "" ||
    reg_email === "" ||
    reg_password === "" ||
    reg_confirm_password === ""
  ) {
    return alert("Please fill all the details");
  } else if (
    !reg_email.includes("@gmail.com") &&
    !reg_email.includes("@yahoo.com")
  ) {
    return alert("Please give a valid email id");
  } else if (reg_password !== reg_confirm_password) {
    alert("Password does not match with confirm password");
  } else if (reg_password.length < 4) {
    alert("Password is Short");
  } else {
    if (items.length == 0) {
      items.push({
        username: reg_username,
        email: reg_email,
        password: reg_password,
        confirm_password: reg_confirm_password,
      });
      localStorage.setItem("registration_details", JSON.stringify(items));
      alert("You have successfully registered");
      ResetForm();
    } else {
      if (email_array.includes(reg_email)) {
        return alert("This email already taken");
      }
      items.push({
        username: reg_username,
        email: reg_email,
        password: reg_password,
        confirm_password: reg_confirm_password,
      });
      localStorage.setItem("registration_details", JSON.stringify(items));
      alert("You have successfully registered");
      ResetForm();
    }
  }
}
function userlogin() {
  const email_array = [];
  const password_array = [];
  var items = JSON.parse(localStorage.getItem("registration_details")) || [];
  if (items) {
    items.map((data, index) => {
      email_array.push(data.email);
      password_array.push(data.password);
    });
  }
  var login_email = document.querySelector("#login_email").value;
  var login_password = document.querySelector("#login_password").value;
  if (
    !email_array.includes(login_email) ||
    !password_array.includes(login_password)
  ) {
    return alert("Please give the correct email and password");
  } else {
    window.location.href =
      "http://127.0.0.1:5500/Account,Cart,Eindex/Eindex.html";
  }
}

// Add to card code

var addCardDetails = JSON.parse(localStorage.getItem("add_cart_details")) || [];
function AddCart1() {
  var cart1_quantity = document.getElementById("cart1").value;
  var addCardDetails =
    JSON.parse(localStorage.getItem("add_cart_details")) || [];
  addCardDetails.push({
    image: "images/product-1.webp",
    name: "Black Watch",
    price: "1500.00",
    quantity: cart1_quantity ? cart1_quantity : "",
  });
  localStorage.setItem("add_cart_details", JSON.stringify(addCardDetails));
  alert("Item added to cart successfully");

  // alert("Hello clicked");
}

function AddCart2() {
  var cart2_quantity = document.getElementById("cart2").value;
  var addCardDetails =
    JSON.parse(localStorage.getItem("add_cart_details")) || [];
  addCardDetails.push({
    image: "images/product-2.webp",
    name: "Black Ladies Watch",
    price: "3300.00",
    quantity: cart2_quantity ? cart2_quantity : "",
  });
  localStorage.setItem("add_cart_details", JSON.stringify(addCardDetails));
  alert("Item added to cart successfully");
  // alert("Hello clicked");
}

function AddCart3() {
  var cart3_quantity = document.getElementById("cart3").value;

  var addCardDetails =
    JSON.parse(localStorage.getItem("add_cart_details")) || [];
  addCardDetails.push({
    image: "images/product-3.webp",
    name: "Sports Watch",
    price: "4500.00",
    quantity: cart3_quantity ? cart3_quantity : "",
  });
  localStorage.setItem("add_cart_details", JSON.stringify(addCardDetails));
  alert("Item added to cart successfully");
  // alert("Hello clicked");
}
function AddCart4() {
  var cart4_quantity = document.getElementById("cart4").value;
  var addCardDetails =
    JSON.parse(localStorage.getItem("add_cart_details")) || [];
  addCardDetails.push({
    image: "images/product-4.webp",
    name: "Wrist Watcht",
    price: "3000.00",
    quantity: cart4_quantity ? cart4_quantity : "",
  });
  localStorage.setItem("add_cart_details", JSON.stringify(addCardDetails));
  alert("Item added to cart successfully");
  // alert("Hello clicked");
}
var addCardDetails = JSON.parse(localStorage.getItem("add_cart_details")) || [];
function showAddCartDetails() {
  var list = "";
  for (var i = 0; i < addCardDetails.length; i++) {
    list += "<tr>";
    list += "<td>";
    list += "<div class='cart-info'>";
    list += "<img src=" + addCardDetails[i]?.image + ">";
    list += "<div> <p> " + addCardDetails[i]?.name + "</p>";
    list += "<small> price  &#8377;" + addCardDetails[i]?.price + "</small>";
    list += "<br>";
    list +=
      "<span class='removebutton' onclick='removeItem(" +
      i +
      ")'>remove</span>";
    list += "</div></div>";
    list += "</td>";
    list += "<td>" + addCardDetails[i]?.quantity + "</td>";
    list +=
      "<td>&#8377; " +
      addCardDetails[i]?.price * addCardDetails[i]?.quantity +
      "</td>";
    list += "</tr>";
  }
  document.querySelector("#add_cart_all_items").innerHTML = list ? list : "";
}

function removeItem(index) {
  addCardDetails.splice(index, 1);
  localStorage.setItem("add_cart_details", JSON.stringify(addCardDetails));
  showAddCartDetails();
  getTotalPrice();
}
function getTotalPrice() {
  var addCardDetails =
    JSON.parse(localStorage.getItem("add_cart_details")) || [];
  var total_price = 0;
  for (var i = 0; i < addCardDetails.length; i++) {
    total_price += parseInt(
      addCardDetails[i]?.price * addCardDetails[i]?.quantity
    );
  }
  var price_details = "";
  price_details += "<tr><td>Subtotal</td><td>" + total_price + "</td></tr>";
  price_details += "<tr><td>Total</td><td>" + 0 + "</td></tr>";
  price_details += "<tr><td>Total</td><td>" + total_price + "</td></tr>";
  document.querySelector("#total_price_details").innerHTML = price_details
    ? price_details
    : "";
}
// function to run when page loads
(function () {
  showAddCartDetails();
  getTotalPrice();
})();

// <tr>
//             <td>Subtotal</td>
//             <td>&#8377;300.00</td>
//           </tr>
//           <tr>
//             <td>Tax</td>
//             <td>&#8377;300.00</td>
//           </tr>
//           <tr>
//             <td>Total</td>
//             <td>&#8377;300.00</td>
//           </tr>

// Forget password

function feg_pass() {
  const rd = prompt("Please enter the email id which you have given.");
  const email_array = [];
  var password_array = "";

  var items = JSON.parse(localStorage.getItem("registration_details")) || [];
  if (items) {
    items.map((data, index) => {
      email_array.push({
        email: data?.email,
        password: data?.password,
      });
    });
  }
  email_array.map((items, index) => {
    if (items?.email == rd) {
      password_array = items?.password;
    }
  });
  if (password_array != "") {
    alert("Your password is:- " + password_array);
  }
}
