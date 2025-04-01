import { Pet } from './Pet.js';

class PetGrowthRecord extends Pet {
  constructor(_name, _species, _adoptionDate, _description, _recordDate) {
    super(_name, _species, _adoptionDate, 'Growth Record');
    this.description = _description;
    this.recordDate = _recordDate;
  }
}
export { PetGrowthRecord };
