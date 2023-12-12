const peopleOnCircle = 2;
const killEach = 4;
const startsAt = 3;

const josefo = (peopleOnCircle, killEach, startsAt) => {
    if(peopleOnCircle === 1){
        return peopleOnCircle;
    }
    let people = Array.from({ length: peopleOnCircle }, (x, index) => index + 1);
    let position = startsAt;

    do{
        position = (position + killEach - 1) % people.length;
        people.splice(position, 1);
    }while(people.length > 1)
    return people[0];
}

console.log("Sobrevives en la posición: ", josefo(peopleOnCircle, killEach, startsAt));