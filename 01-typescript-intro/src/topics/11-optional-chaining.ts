export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Joan'
}

const passenger2: Passenger = {
    name: 'Diana',
    children: ['Lilieth', 'Leonardo']
}

const returChildrenNumber = (passenger: Passenger): number => {
    // const howManyChildren = passenger.children?.length || 0;
    const howManyChildren = passenger.children!.length;
    console.log(passenger.name, howManyChildren);
    return howManyChildren;
}

returChildrenNumber(passenger2);