import {ApplicationConfig, importProvidersFrom} from "@angular/core";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {DBConfig, NgxIndexedDBModule} from "ngx-indexed-db";

const dbConfig: DBConfig = {
  name: 'TerrariaHub',
  version: 1,
  objectStoresMeta: [{
    store: 'items',
    storeConfig: {keyPath: 'id', autoIncrement: false},
    storeSchema: [
      {name: 'id', keypath: 'id', options: {unique: false}},
      {name: 'completed', keypath: 'completed', options: {unique: false}}
    ]
  }]
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(NgxIndexedDBModule.forRoot(dbConfig)),
  ],
};
