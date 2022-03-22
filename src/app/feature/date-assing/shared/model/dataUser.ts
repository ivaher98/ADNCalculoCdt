export class DataUser{
    nameUser: string;
    lastNameUser: string;
    document: number;

    constructor(nameUser: string, lastNameUser: string, document: number){
        this.nameUser = nameUser;
        this.lastNameUser = lastNameUser;
        this.document = document;
    }
}