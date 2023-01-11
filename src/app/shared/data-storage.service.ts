import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PetManagerService } from "../pet-manager/pet-manager.service";
import { Pet } from "./Pet.model";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private petManagerService: PetManagerService) {

    }

    storePets() {
        this.http.post('http://localhost:8080/pets', Pet)
        .subscribe(response => {
            console.log(response)
        })
    }
}