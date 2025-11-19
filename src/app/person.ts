export type Person = {
    id:number;
    firstName:string;
    lastName:string;
    phone:string;
    email:string;
}

export class SimpleContact implements Person {
    constructor(
        public id:number,
        public firstName:string = '',
        public lastName:string = '',
        public phone:string = '',
        public email:string = ''
    ) {}
}