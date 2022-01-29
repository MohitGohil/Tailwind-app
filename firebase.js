// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";
import {
  getDatabase,
  ref,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCIK3mpayWS3sq-aaA2-zDaUQNbmyZIMk",
  authDomain: "e-clone-47f72.firebaseapp.com",
  projectId: "e-clone-47f72",
  storageBucket: "e-clone-47f72.appspot.com",
  messagingSenderId: "75444144009",
  appId: "1:75444144009:web:14aab1be8c030131374358",
  measurementId: "G-4CXX2YXR57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getItems() {
  const querySnapshot = await getDocs(collection(db, "items"));
  let items = [];
  querySnapshot.forEach((doc) => {
    // console.log(doc.id, " => ", doc.data());
    items.push({
      id: doc.id,
      image: doc.data().image,
      name: doc.data().name,
      make: doc.data().make,
      rating: doc.data().rating,
      price: doc.data().price,
    });
  });
  generateItems(items);
}

async function addToCart(item) {
  console.log(item);
  let cartItem = await getDocs(collection(db, "cart-item"));
  cartItem.forEach((doc) => {
    console.log(doc.data());
  });
  // let cartDoc = collection(db, "cart-item", item.id);
  // let cartItem = await getDocs(cartDoc);

  if ((cartItem = item.id)) {
    console.log("true", cartItem);
    setDoc(ref(db, "cart-item", cartItem), {
      quantity: quantity + 1,
    });
  } else {
    console.log("else");
    setDoc(doc(db, "cart-item", item.id), {
      image: item.image,
      make: item.make,
      name: item.name,
      price: item.price,
      rating: item.rating,
      quantity: 1,
    });
  }
}

function generateItems(items) {
  items.forEach((item) => {
    let doc = document.createElement("div");
    doc.classList.add("main-product", "mr-5");
    doc.innerHTML = `
            <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
              <img class="w-full h-full object-contain" src="${item.image}">
            </div>
            <div class="product-name text-gray-700 font-bold mt-2 text-sm">
              ${item.name}
            </div>
            <div class="product-make text-green-700 font-bold">
              ${item.make}
            </div>
            <div class="product-rating text-yellow-300 font-bold my-1">
              * * * * *${item.rating}
            </div>
            <div class="product-price font-bold text-gray-700 text-lg">
              ${item.price}
            </div>`;

    let addToCartEl = document.createElement("div");
    addToCartEl.classList.add(
      "add-to-cart",
      "text-md",
      "cursor-pointer",
      "h-8",
      "w-28",
      "bg-yellow-500",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "rounded",
      "hover:bg-yellow-600"
    );
    addToCartEl.innerText = "Add to Cart";
    addToCartEl.addEventListener("click", function () {
      addToCart(item);
    });
    doc.appendChild(addToCartEl);
    document.querySelector(".main-saction-products").appendChild(doc);
  });
}

getItems();
