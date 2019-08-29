import { Etape } from 'src/app/models/etape/etape.model';
export class Trajet {

    'id': number;
    'nom': string;
    'description': string;
    'dateDepart': string;
    'etapes': Etape[];
    'utilisateur': Utilisateur;
    'equipements': Equipement[];
    'membres': Membre[];

    constructor() {}
}
