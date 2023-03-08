import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class FireBaseService {
  constructor(
    public auth: AngularFireAuth,
    public database: AngularFirestore
  ) {}

  public create<Data>(path: string, data: Data) {
    return this.database.collection(path).add(data);
  }

  public update<Data>(path: string, id: string, data: Data) {
    return this.database.collection(path).doc(id).set(data);
  }

  public delete(path: string, id: string) {
    return this.database.collection(path).doc(id).delete();
  }

  public getAll(path: string) {
    return this.database.collection(path).snapshotChanges();
  }

  public getById(path: string, id: string) {
    return this.database.collection(path).doc(id).get();
  }

  public getByQuery(
    path: string,
    fieldPath: string,
    opStr: '<' | '<=' | '==' | '>' | '>=',
    value: string
  ) {
    return this.database
      .collection(path)
      .ref.where(fieldPath, opStr, value)
      .get();
  }
}
