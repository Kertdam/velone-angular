import { Message } from 'src/app/models/message/message.model';
import { Statistique } from 'src/app/models/statistique/statistique.model';
export class Membre {
    'id': number;
    'trajetId': number;
    'utilisateurId': number;
    'messages': Message[];
    'stats': Statistique;

    constructor() { }
}
