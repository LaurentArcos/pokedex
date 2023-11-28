export interface Pokemon {
  id: number
  name: string
  types: Type[]
  weight: number
  height: number
  stats: {base_stat: number, effort: number, stat: {name: string, url: string}}[]
}

interface Type {
  slot: number
  type: {
      name: string,
      url: string
  }
}

export type SearchPokemonProps = {
  setPokemonList: (data: Pokemon[]) => void
}