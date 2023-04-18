import firebase from "./configFB";
import "firebase/auth";

const auth = firebase.auth();
//DB
export const db = firebase.firestore();

//Set ref to docs in Firebase firestore
export const getDocRef = (roomNum) => {
  const user = auth.currentUser; // return object if signedin and null if not
  return user
    ? console.log("Logged in user")
    : db.collection("data").doc(roomNum);
};

//That's fn record DB with reducer to coherence writing data with FB format
//(FB donot support nested arrays that is used originally in state)
export const setDataFB = (key, item, roomNum) => {
  //1step - Fn get two parameters key ('firstHour', 'secondHour' etc e.g.) and
  //item - that's [[{}],[{}]] and construct new arr like [{},{},{}]
  const emptyArr = [];
  const objVal = (it) => Object.values(it)[0];
  item.map((it) =>
    emptyArr.push(
      objVal(it).name !== ("" || null || undefined) && {
        name: objVal(it).name,
        id: objVal(it).id
      }
    )
  );
  //2d step - Make FB compatible structure like { "key": [{},{}] } e.g.
  //And write data to DB
  db.collection("data")
    .doc(roomNum)
    .set(
      {
        [key]: emptyArr
      },
      { merge: true }
    );
};
