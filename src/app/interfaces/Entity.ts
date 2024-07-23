/**
 * Terraria entity (npc)
 */
export interface Entity {
  id: string;
  name: string;
  internalName: string;
  image: string;
  link: string;
  category: {
    group: string;
    name: string;
  }
}
