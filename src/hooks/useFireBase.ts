import { useEffect } from "react";
import { firestore } from "../firebase";

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

  return {};
}
