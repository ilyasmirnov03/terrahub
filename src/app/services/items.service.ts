import { Injectable } from '@angular/core';
import {Item} from "../items/interfaces/Item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../items/interfaces/Category";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl: string = "http://localhost:8100/";
  constructor(private http:HttpClient) {}
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "items/all");
  }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl + "items/categories");
  }
}
