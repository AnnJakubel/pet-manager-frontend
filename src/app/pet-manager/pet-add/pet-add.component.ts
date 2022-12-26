import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from 'src/app/shared/Pet.model';
import { PetManagerService } from '../pet-manager.service';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent {
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
    const newPet = new Pet(value.name, value.code, value.type, value.color, value.country);

  }

}
