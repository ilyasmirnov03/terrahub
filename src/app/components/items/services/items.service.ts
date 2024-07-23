import {Injectable, signal} from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../../../interfaces/item.interface";
import {environment} from "../../../../environments/environment";
import {Category} from "../../../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";

/**
 * Service to perform any action with items collection in the backend
 */
@Injectable({
  providedIn: 'root',
})
export class ItemsService {

  constructor(private readonly http: HttpClient) {
  }

  /**
   * Collected items state
   */
  public collectedItems = signal(0);

  /**
   * Collected items setter
   */
  public manageCollectedItems(score: number) {
    this.collectedItems.update(n => n + score);
  }

  /**
   * Get all items from the backend
   */
  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/items`);
  }

  /**
   * Get all item categories from the backend
   */
  public getItemsCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/items/categories`);
  }
}
