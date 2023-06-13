export interface Npc {
  id: string;
  name: string;
  internalName: string;
  link: string;
  image: string;
  version: string;
  category: {
    group: string;
    name: string;
  };
}
