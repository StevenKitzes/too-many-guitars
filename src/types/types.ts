export type GuitarType =
  "Electric" |
  "Semi-hollow" |
  "Acoustic" |
  "Hollow-body" |
  "Electric Bass" |
  "Unknown type";

export type RawGuitarData = {
  type: GuitarType|null,
  model: string|null,
  brand: string|null,
  year: string|null,
  imageFront: string|null,
  imageBack: string|null,
  history: string|null
}

export type GuitarData = {
  id: string,
  type: GuitarType,
  model: string,
  brand: string,
  year: string,
  imageFront: string|null,
  imageBack: string|null,
  history: string
}
