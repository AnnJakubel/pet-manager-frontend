import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PetManagerComponent } from './pet-manager/pet-manager.component';
import { PetEditComponent } from './pet-manager/pet-edit/pet-edit.component'
import { PetManagerService } from './pet-manager/pet-manager.service';
import { PetAddComponent } from './pet-manager/pet-add/pet-add.component';
import { SortDirective } from './shared/sort.directive';
import { LoginComponent } from './login/login.component';




const appRoutes: Routes =[
  { path: '', component: PetManagerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-pet', component: PetAddComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PetManagerComponent,
    PetEditComponent,
    PetAddComponent,
    SortDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PetManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
