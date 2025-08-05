import {ApplicationConfig} from "@angular/core";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideMatomo, withRouter} from "ngx-matomo-client";
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideMatomo(
      {
        siteId: 1,
        trackerUrl: "https://stats.ilyasmirnov.dev",
        disabled: !environment.production,
      },
      withRouter(),
    )
  ],
};
