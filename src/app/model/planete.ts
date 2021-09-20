import { CorpsCeleste } from './corps-celeste';
import { Etoile } from './etoile';

export class Planete extends CorpsCeleste {
  constructor(
    nom: string,
    masse: number,
    diametre: number,
    x: number,
    y: number,
    vx: number,
    vy: number,
    parent: Etoile,
    id?: number | undefined
  ) {
    super(nom, 'Planete', masse, diametre, x, y, vx, vy, parent, id);
  }
}
