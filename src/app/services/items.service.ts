import { Injectable } from '@angular/core';
import {Item} from "../Item";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl: string = "http://localhost:8100/";
  constructor(private http:HttpClient) {}
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl + "items/all");
  }
  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + "items/categories");
  }
}
