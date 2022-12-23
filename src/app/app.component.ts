import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from 'react-bootstrap';
import { NgForm } from '@angular/forms'
import { Pet } from './shared/Pet.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pet-manager-frontend';

  ngOnInit() {

  }

  onAddPet(form: NgForm) {
    const value = form.value;
    const newPet = new Pet(value.type, value.color, value.country);

  }
  

}
