export class SpeciesModel {
  constructor(
      public id?: string,
      public name?: string,
      public aliases?: string,
      public image?: string,
      public scientificName?: string,
      public type?: string,
      public tags?: string,
      public overview?: string,
      public habitat?: string,
      public references?: string[]) {
  }
}