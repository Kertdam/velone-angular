import { Fichier } from '../fichier/fichier.model';

export class Message {
    'id': number;
    'texte': string;
    'membreId': number;
    'fichiers': Fichier[];

    constructor() { }
}
