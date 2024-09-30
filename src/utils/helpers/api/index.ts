import { api } from "@/config";
import { TPokemonDetail, TPokemonList } from "@/utils/types";

export const getListPokemons = async (limit = 50) => {
  try {
    const { data } = await api.get<TPokemonList>("/pokemon", {
      params: {
        limit,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPokemonByName = async (name: string) => {
  try {
    const { data } = await api.get<TPokemonDetail>(`/pokemon/${name}`);

    return data;
  } catch (error) {
    console.error(error);
  }
};
