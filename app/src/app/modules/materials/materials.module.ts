import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";

const materialComponents = [
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [materialComponents]
})
export class MaterialsModule { }
