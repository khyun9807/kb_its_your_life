import { Pet } from './Pet.js';

class PetPhoto extends Pet {
  constructor(_name, _species, _adoptionDate, _photoPath, _uploadDate) {
    super(_name, _species, _adoptionDate, 'Photo');
    this.photoPath = _photoPath;
    this.uploadDate = _uploadDate;
  }
}
export { PetPhoto };
