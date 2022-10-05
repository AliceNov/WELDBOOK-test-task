import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoriteRoutingModule } from './favorite-routing.module';
import { FavoriteComponent } from './favorite/favorite.component';
import { MaterialsModule } from 'src/app/modules/materials/materials.module';


@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FavoriteRoutingModule,
    MaterialsModule
  ]
})
export class FavoriteModule { }
