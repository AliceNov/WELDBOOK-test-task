import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { MaterialsModule } from 'src/app/modules/materials/materials.module';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './main/search.pipe';
import { NgxSpinner, NgxSpinnerComponent, NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    MainComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialsModule,
    FormsModule,
    NgxSpinnerModule
    
  ]
})
export class MainModule { }
