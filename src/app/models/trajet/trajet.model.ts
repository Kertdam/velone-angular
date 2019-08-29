import { Etape } from 'src/app/models/etape/etape.model';
import { Equipement } from 'src/app/models/equipement/equipement.model';
import { Membre } from 'src/app/models/membre/membre.model';
export class Trajet {

    'id': number;
    'nom': string;
    'description': string;
    'dateDepart': Date;
    'etapes': Etape[];
    'equipements': Equipement[];
    'membres': Membre[];

    constructor() {}
}
