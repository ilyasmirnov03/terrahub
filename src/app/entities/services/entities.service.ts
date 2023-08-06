import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Entity} from "../../interfaces/Entity";
import {environment} from "../../../environments/environment";
import {Category} from "../../interfaces/Category";
import {HttpClient} from "@angular/common/http";

/**
 * Service to perform any action with entities collection in the backend
 */
@Injectable()
export class EntitiesService {

  constructor(private readonly http: HttpClient) {
  }

  /**
   * Get all entities from the backend
   */
  public getEntities(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${environment.apiUrl}/entities`);
  }

  /**
   * Get all entity categories from the backend
   */
  public getEntityCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/entities/categories`)
  }
}
