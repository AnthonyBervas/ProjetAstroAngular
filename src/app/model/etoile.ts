import { CorpsCeleste } from './corps-celeste';
export class Etoile extends CorpsCeleste {
  constructor(
    nom: string,
    masse: number,
    diametre: number,
    id?: number | undefined
  ) {
    super(nom, 'Etoile', masse, diametre, 0.0, 0.0, 0.0, 0.0, undefined, id);
  }
}
