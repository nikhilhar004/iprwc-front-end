import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {UniversalPartsModule} from "../universal-parts/universal-parts.module";



@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
  imports: [
    CommonModule,
    UniversalPartsModule
  ]
})
export class HomeModule { }
