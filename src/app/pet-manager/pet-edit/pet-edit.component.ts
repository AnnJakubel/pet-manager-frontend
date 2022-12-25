import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pet } from 'src/app/shared/Pet.model';
import { PetManagerService } from '../pet-manager.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('typeInput', {static: true}) typeInput: ElementRef;
  @ViewChild('colorInput', {static: true}) colorInput: ElementRef;
  @ViewChild('countryInput', {static: true}) countryInput: ElementRef;

  constructor(private petManagerService: PetManagerService) {}

  ngOnInit() {}

  onAddPet() {
    const petName = this.nameInput.nativeElement.value;
    const petType = this.typeInput.nativeElement.value;
    const petColor = this.colorInput.nativeElement.value;
    const petCountry = this.countryInput.nativeElement.value;
    const newPet = new Pet(petName, petType, petColor, petCountry);
  }
}
