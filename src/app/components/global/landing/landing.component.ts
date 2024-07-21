import {Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import { routes } from 'src/app/constants/routes.const';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'thb-landing',
  templateUrl: './landing.component.html',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ]
})
export class LandingComponent implements OnInit {
  public version = '';
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
