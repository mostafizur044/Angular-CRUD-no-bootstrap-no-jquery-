export class Car{
    constructor(
        public id:number = 0,
        public ownerName: string = '',
        public address: string = '',
        public phone: string = '',
        public brand: string = '',
        public model: string = '',
        public plate: string = '',
        public color: string = '',
        public entryDate: Date = new Date(),
        public releaseDate: Date = new Date()
    ){}
}