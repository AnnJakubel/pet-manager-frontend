import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/shared/Pet.model';
import { PetManagerService } from '../pet-manager.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit, OnDestroy {
  @ViewChild('editForm', { static: false }) editForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedPetIndex: number;
  editedPet: Pet;


  constructor(private petManagerService: PetManagerService) {}

  ngOnInit() {
    this.subscription = this.petManagerService.startedEditing
    .subscribe(
      (index: number) => {
        this.editedPetIndex = index;
        this.editMode = true;
        this.editedPet = this.petManagerService.getOnePet(index);
        this.editForm.setValue({
          name: this.editedPet.name,
          code: this.editedPet.code,
          type: this.editedPet.type,
          color: this.editedPet.color,
          country: this.editedPet.country
        })
      }
    );
  }

  onUpdatePet(form: NgForm) {
    const value = form.value;
    const newPet = new Pet(value.name, value.code, value.type, value.color, value.country);
    if (this.editMode) {
      this.petManagerService.updatePet(this.editedPetIndex, newPet)
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
