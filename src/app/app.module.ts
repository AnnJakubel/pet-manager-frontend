import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PetManagerComponent } from './pet-manager/pet-manager.component';
import { PetEditComponent } from './pet-manager/pet-edit/pet-edit.component'
import { PetManagerService } from './pet-manager/pet-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    PetManagerComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PetManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
