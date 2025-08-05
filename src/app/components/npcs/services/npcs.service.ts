import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Entity} from "../../../interfaces/entity.interface";
import {environment} from "../../../../environments/environment";
import {Category} from "../../../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";

/**
 * Service to perform any action with npcs collection in the backend
 */
@Injectable({
  providedIn: 'root',
})
export class NpcsService {

  constructor(private readonly http: HttpClient) {
  }

  /**
   * Get all npcs from the backend
   */
  public getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiUrl}/entities`);
  }

  /**
   * Get all npc categories from the backend
   */
  public getEntityCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/entities/categories`)
  }
}
