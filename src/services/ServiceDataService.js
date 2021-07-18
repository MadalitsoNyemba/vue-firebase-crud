import firebase from "../firebase";

const db = firebase.ref("/services");

class ServiceDataService {
  getAll() {
    return db;
  }

  create(service) {
    return db.push(service);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new ServiceDataService();
