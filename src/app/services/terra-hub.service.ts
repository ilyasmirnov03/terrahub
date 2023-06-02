import {Injectable} from '@angular/core';
import {Item} from "../interfaces/Item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces/Category";
import {Entity} from "../interfaces/Entity";

@Injectable({
  providedIn: 'root'
})
export class TerraHubService {
  private apiUrl: string = "http://localhost:8100";

  constructor(private http: HttpClient) {
  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/items`);
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/items/categories`);
  }

  public getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${this.apiUrl}/entities`);
  }
}
