export type RawGuitarData = {
  type: string|null,
  model: string|null,
  brand: string|null,
  year: string|null,
  imageFront: string|null,
  imageBack: string|null,
  history: string|null
}

export type GuitarData = {
  id: string,
  type: string,
  model: string,
  brand: string,
  year: string,
  imageFront: string|null,
  imageBack: string|null,
  history: string
}
