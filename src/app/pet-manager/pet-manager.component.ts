import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/Pet.model';
import { PetManagerService } from './pet-manager.service';

@Component({
  selector: 'app-pet-manager',
  templateUrl: './pet-manager.component.html',
  styleUrls: ['./pet-manager.component.css']
})
export class PetManagerComponent implements OnInit {
  pets: any = [];


  constructor(private petManagerService: PetManagerService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/pets')
    .subscribe((data) => {
      this.pets = data;
    })

    // this.pets = this.petManagerService.getPets();
    // this.petManagerService.petsChanged.subscribe(
    //   (pets: Pet[]) => {
    //     this.pets = pets
    //   }
    // )
  }
}
