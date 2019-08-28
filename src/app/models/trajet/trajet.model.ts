import { Etape } from 'src/app/models/etape/etape.model';
import { Utilisateur } from '../utilisateur/utilisateur.model';
export class Trajet {

    'id': number;
    'nom': string;
    'description': string;
    'dateDepart': string;
    'etapes': Etape[];
    'utilisateur': Utilisateur;

    constructor() {}
}
