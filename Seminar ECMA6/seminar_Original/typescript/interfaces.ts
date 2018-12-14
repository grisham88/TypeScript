// Interface vs. Structural Type

// Structural Type
type TPerson = {
    vorname:string,
    nachname:string,
    alter?:number,
    hallo: ()=>void
};

// Interface
interface IPerson {
    vorname:string;
    nachname:string;
    alter?:number;
    hallo: ()=>void;
}
interface IPerson {
    haustier:string;
}

let pete: IPerson;

