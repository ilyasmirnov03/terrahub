import {Routes} from "@angular/router";
import {LandingComponent} from "./components/global/landing/landing.component";
import {ItemsContainerComponent} from "./components/items/component/items-container.component";
import {EntitiesContainerComponent} from "./components/entities/component/entities-container.component";
import {AboutComponent} from "./components/global/about/about.component";
import {NotFoundComponent} from "./components/global/not-found/not-found.component";

export const routes: Routes = [
  {path: '', component: LandingComponent, title: 'TerraHub'},
  {path: 'items', component: ItemsContainerComponent, title: 'Terraria Items'},
  {path: 'items/:collection', component: ItemsContainerComponent, title: 'Collect Terraria Items'},
  {path: 'npcs', component: EntitiesContainerComponent, title: 'Terraria NPCs'},
  {path: 'about', component: AboutComponent, title: 'What is Terrahub'},
  {path: '**', component: NotFoundComponent, title: 'Not Found'}
];
