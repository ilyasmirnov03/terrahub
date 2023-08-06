import {Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {routes} from "../../constants/routes.const";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {
  public version: string = '';
  public routes = routes;

  constructor(
    private readonly meta: Meta,
    private readonly http: HttpClient,
  ) {
    this.meta.updateTag({name: 'description', content: 'The place to find all terraria items and entities'});
  }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/version`, {responseType: 'text'}).subscribe((versionNumber: string) => {
      this.version = versionNumber;
    });
  }
}
