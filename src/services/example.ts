import {IResponse} from 'types/services/services'

import api from 'configs/axios'

const getPokemonList = (): Promise<IResponse<{item: string}>> => {
  return api.get('https://pokeapi.co/api/v2/pokemon/ditto')
}

export {getPokemonList}
