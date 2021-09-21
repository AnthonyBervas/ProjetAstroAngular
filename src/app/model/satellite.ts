import { Planete } from './planete';
import { CorpsCeleste } from './corps-celeste';

export class Satellite extends CorpsCeleste {
  constructor(
    nom?: string,
    type?: string,
    masse?: number,
    diametre?: number,
    x?: number,
    y?: number,
    vx?: number,
    vy?: number,
    parent?: Planete,
    id?: number | undefined
  ) {
    super(nom, type, masse, diametre, x, y, vx, vy, parent, id);
  }
}
