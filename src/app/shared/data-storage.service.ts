import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PetManagerService } from "../pet-manager/pet-manager.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private petManagerService: PetManagerService) {

    }

    storePets() {
        this.http.post('http://localhost:8080/pets', pet)
        .subscribe(response => {
            console.log(response)
        })
    }

    private fetchPets() {
        this.http.get('http://localhost:8080/pets')
    }
}