import { useEffect } from "react";
import { firestore } from "../firebase";
// Create a reference to the cities collection

// const authorRef = collection(firestore, "content");
// // Create a query against the collection.
//  const q = query(authorRef, where("author", "==", "test"));

//  const querySnapshot = await getDocs(q);
//  querySnapshot.forEach((doc) => {
//    // doc.data() is never undefined for query doc snapshots
//    console.log(doc.id, " => ", doc.data());
//  });

export function useFireBaseCollection() {
  useEffect(() => {
    firestore
      .collection("content")
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data());
          console.log(doc);
        });
      });
  }, []);

  const handleAdd = async () => {
    // const res = await firestore
    //   .collection("content")
    //   .add({ author: "test", content: "이건 두번째 입니다." });
  };

  return { handleAdd };
}
