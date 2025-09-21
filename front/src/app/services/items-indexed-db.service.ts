import { Inject, Injectable, DOCUMENT } from '@angular/core';
import { Observable } from "rxjs";
import { CompletedItem } from "../interfaces/completed-item.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemsIndexedDbService {

  /**
   * Name of the local database to save collected items to.
   */
  private readonly _dbName = 'Terrahub';

  /**
   * Name of the store to use in all transactions.
   */
  private readonly _storeName = 'collectedItems';

  /**
   * The current indexedDB connection. Is null if there is no connection.
   */
  private _dbConnection: IDBDatabase | null = null;

  public constructor(
    @Inject(DOCUMENT) private _document: Document,
  ) {
  }

  /**
   * Open a new connection or get existing one
   */
  private _connectOrGetConnection(callback: (dbConnection: IDBDatabase) => void): void {
    // If already connected to the database, run callback and quit immediately
    if (this._dbConnection != null) {
      callback(this._dbConnection);
      return;
    }

    if (this._document.defaultView == null) {
      console.error('Can\'t connect to IndexedDB: the window object is null.');
      return;
    }

    const openRequest = this._document.defaultView?.indexedDB.open(this._dbName, 1);
    if (openRequest == null) {
      console.error('Can\'t connect to IndexedDB: openRequest is null.');
      return;
    }

    openRequest.onsuccess = () => {
      this._dbConnection = openRequest.result;
      callback(openRequest.result);
    }
    openRequest.onupgradeneeded = () => {
      const objectStore = openRequest.result.createObjectStore(this._storeName, {
        keyPath: 'id',
        autoIncrement: false,
      });
      objectStore.createIndex('completed', 'completed', { unique: false });
    }
    openRequest.onerror = (err: Event) => {
      console.error('An error occurred while opening the indexedDB connection', err);
      return;
    }
  }

  /**
   * Get all records from collection
   */
  public getAll(): Observable<CompletedItem[]> {
    return new Observable<CompletedItem[]>((subscriber) => {
      this._connectOrGetConnection((dbConnection) => {
        const transaction = dbConnection.transaction(this._storeName, 'readonly').objectStore(this._storeName).getAll();
        transaction.onsuccess = (event: Event) => {
          if (event.target == null) {
            throw new Error('event.target is null');
          }
          if (!(event.target instanceof IDBRequest)) {
            throw new Error('No result property was found in event or result is not of expected type.');
          }
          subscriber.next(event.target.result);
        };
      });
    })
  }

  /**
   * Add one item to db
   * TODO: return observable with result of transaction
   */
  public add(item: CompletedItem): void {
    this._connectOrGetConnection((dbConnection) => {
      dbConnection.transaction(this._storeName, 'readwrite').objectStore(this._storeName)
        .add(item);
    });
  }

  /**
   * Delete one item from db
   * TODO: return observable with result of transaction
   */
  public delete(id: string): void {
    this._connectOrGetConnection((dbConnection) => {
      dbConnection.transaction(this._storeName, 'readwrite').objectStore(this._storeName)
        .delete(id);
    });
  }
}
