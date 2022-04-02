export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void
    //makeSound?: (sound: string) => void; 
    // ? means this can be not define in object
}


const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}



//duck1.makeSound!('QUACK'); 
// use ! to tell computer that developer knows better than you, otherwise will be mistake


export const ducks = [duck1, duck2]