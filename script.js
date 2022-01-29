// Get a list of cities from your database

// async function getItems() {
//   const itemsCol = collection(db, "items");
//   const itemSnapshot = await getDocs(itemsCol);
//   const itemList = itemSnapshot.docs.map((doc) => doc.data());
//   console.log(itemList);
// }

// function getItems() {
//   db.collection("items")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//       });
//     });
// }

// async function getItems() {
//   const querySnapshot = await getDocs(collection(db, "items"));
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// }

// getItems();
