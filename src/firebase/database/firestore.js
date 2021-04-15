import firebaseApp from "../firebaseConfig";

const db = firebaseApp.firestore();
//? setting for working w/ snapshots to avoid errors
db.settings({ timestampsInSnapshots: true });

export default db;
