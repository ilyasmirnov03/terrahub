import {Routes} from "@angular/router";
import {LandingComponent} from "./components/global/landing/landing.component";
import {ItemsContainerComponent} from "./components/items/items-container.component";
import {NpcsContainerComponent} from "./components/npcs/npcs-container.component";
import {AboutComponent} from "./components/global/about/about.component";
import {NotFoundComponent} from "./components/global/not-found/not-found.component";
import {ItemsCollectionComponent} from "./components/items/items-collection/items-collection.component";

/**
 * Application routes
 */
export const routes: Routes = [
  {path: '', component: LandingComponent, title: 'TerraHub'},
  {path: 'items', component: ItemsContainerComponent, title: 'Terraria Items'},
  {path: 'items/collection', component: ItemsCollectionComponent, title: 'Collect Terraria Items'},
  {path: 'npcs', component: NpcsContainerComponent, title: 'Terraria NPCs'},
  {path: 'about', component: AboutComponent, title: 'What is Terrahub'},
  {path: '**', component: NotFoundComponent, title: 'Not Found'}
];
