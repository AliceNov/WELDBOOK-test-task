import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main/main.component';

const routes: Routes = [
  {path: "favorite", loadChildren: () => import("./pages/favorite/favorite.module").then((m) => m.FavoriteModule)},
  {path: "", redirectTo: "/main", pathMatch: "full"},
  {path: "main", pathMatch: "full", component: MainComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
