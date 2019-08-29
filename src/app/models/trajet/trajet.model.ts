import { Utilisateur } from 'src/app/models/utilisateur/utilisateur.model';
import { Equipement} from 'src/app/models/equipement/equipement.model';
import { Membre } from 'src/app/models/membre/membre.model';
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
