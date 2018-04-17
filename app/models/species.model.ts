export class SpeciesModel {
  constructor(
      public imageURL?: string,
      public name?: string,
      public scientificName?: string,
      public overview?: string,
      public behavior?: string,
      public habitat?: string,
      public size?: string,
      public conservationStatus?: string,
      public type?: string,
      public tags?: string,
      public references?: string[]) {
  }
}