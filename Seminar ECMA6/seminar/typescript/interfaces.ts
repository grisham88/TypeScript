// Interface vs Structural Type

// Structural Type speichern:
type TPerson = {
    vorname: string,
    nachname: string,
    alter?: number,
    hallo: () => void
};

let popeye: TPerson;
popeye = {
    vorname: "popeye",
    nachname: "Pan",
    alter: 40,
    hallo: function () {
        console.log("Hallo")
    }
}

// Interface
interface IPerson {
    vorname: string,
    nachname: string,
    alter?: number,
    hallo: () => void
}

interface IPerson {
    haustier: string
}

let pete: IPerson = {
    vorname: "Pete",
    nachname: "Pan",
    hallo: function () {
        console.log("Hallo")
    },
    haustier: 'Dackel'
};