export type Person = {
    id:number;
    firstname:string;
    lastname:string;
    phone:string;
    email:string;
}

export class SimpleContact implements Person {
    constructor(
        public id:number,
        public firstname:string = '',
        public lastname:string = '',
        public phone:string = '',
        public email:string = ''
    ) {}
}