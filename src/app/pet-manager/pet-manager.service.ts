import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Pet } from "../shared/Pet.model";

@Injectable()
export class PetManagerService {
    petsChanged = new EventEmitter<Pet[]>();
    startedEditing = new Subject<number>();
    private pets: Pet[] = [];

    getPets() {
        return this.pets.slice();
    }

    getOnePet(index: number) {
        return this.pets[index];
    }

    addPet(pet: Pet) {
        this.pets.push(pet);
        this.petsChanged.emit(this.pets.slice());
    }

    updatePet(index: number, newPet: Pet) {
        this.pets[index] = newPet;
        this.petsChanged.next(this.pets.slice());
    }
}