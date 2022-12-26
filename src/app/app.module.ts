import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PetManagerComponent } from './pet-manager/pet-manager.component';
import { PetEditComponent } from './pet-manager/pet-edit/pet-edit.component'
import { PetManagerService } from './pet-manager/pet-manager.service';
import { PetAddComponent } from './pet-manager/pet-add/pet-add.component';
import { SortDirective } from './shared/sort.directive';


const appRoutes: Routes =[
  { path: '', component: PetManagerComponent },
  { path: 'add-pet', component: PetAddComponent },
  { path: 'edit-pet', component: PetEditComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PetManagerComponent,
    PetEditComponent,
    PetAddComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PetManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
