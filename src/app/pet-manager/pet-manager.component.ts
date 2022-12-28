import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PetManagerService } from './pet-manager.service';

@Component({
  selector: 'app-pet-manager',
  templateUrl: './pet-manager.component.html',
  styleUrls: ['./pet-manager.component.css']
})
export class PetManagerComponent implements OnInit {
  pets: any = [];
  clicked = false;


  constructor(private petManagerService: PetManagerService, private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/pets')
    .subscribe((data) => {
      this.pets = data;
    });
  }

  onEditPet(index: number) {
    this.petManagerService.startedEditing.next(index);
  }
}
