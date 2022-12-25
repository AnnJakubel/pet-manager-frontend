import { EventEmitter, Injectable } from "@angular/core";
import { Pet } from "../shared/Pet.model";

@Injectable()
export class PetManagerService {
    petsChanged = new EventEmitter<Pet[]>();
    
    private pets: Pet[] = [
        new Pet('Pootsman', 'Cat', 'Black', 'Estonia'),
        new Pet('Mitsi', 'Cat', 'Brown', 'Latvia')
    ];

    getPets() {
        return this.pets.slice();
    }

    addPet(pet: Pet) {
        this.pets.push(pet);
        this.petsChanged.emit(this.pets.slice());
    }
}