import {Injectable} from '@angular/core';
import {Item} from "../interfaces/Item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces/Category";
import {Entity} from "../interfaces/Entity";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TerraHubService {
  constructor(private http: HttpClient) {
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/items`);
  }

  public getItemsCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/items/categories`);
  }

  public getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiUrl}/entities`);
  }

  public getEntityCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/entities/categories`)
  }
}
