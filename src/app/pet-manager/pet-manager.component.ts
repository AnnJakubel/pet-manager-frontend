import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/Pet.model';
import { PetManagerService } from './pet-manager.service';

@Component({
  selector: 'app-pet-manager',
  templateUrl: './pet-manager.component.html',
  styleUrls: ['./pet-manager.component.css']
})
export class PetManagerComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petManagerService: PetManagerService) {}

  ngOnInit() {
    this.pets = this.petManagerService.getPets();
    this.petManagerService.petsChanged.subscribe(
      (pets: Pet[]) => {
        this.pets = pets
      }
    )
    
  }

  onAddPet(form: NgForm) {
    const value = form.value;
    const newPet = new Pet(value.name, value.type, value.color, value.country);

  }

}
