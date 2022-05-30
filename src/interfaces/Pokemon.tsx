export default interface Pokemon {
  id: number;
  name: string;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  }
}
