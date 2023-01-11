import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
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
  @ViewChild('f', { static: false }) petForm: NgForm;
  addedPet = {
    name: '',
    code: 0,
    type: '',
    color: '',
    country: '',
  }
  submitted = false;


  constructor(private petManagerService: PetManagerService, private http: HttpClient) {

  }

  ngOnInit() {
    this.pets = this.petManagerService.getPets();
    this.petManagerService.petsChanged.subscribe(
      (pets: Pet[]) => {
        this.pets = pets
      }
    )
    
  }

  onAddPet() {
    this.submitted = true;
    this.addedPet.name = this.petForm.value.name;
    this.addedPet.code = this.petForm.value.code;
    this.addedPet.type = this.petForm.value.type;
    this.addedPet.color = this.petForm.value.color;
    this.addedPet.country = this.petForm.value.country;
    this.petManagerService.addPet(this.addedPet);

    this.http.post<[]>('/pets', this.addedPet)
    .subscribe((response) => {
      console.warn("response", response)
    })

    this.petForm.reset();
  }
}
