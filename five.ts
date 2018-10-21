interface Profile {
    firstName: String;
    lastName: String;
    name: String;
    generation: number ;
};

const me: Profile = {
    firstName: "Patcharapat",
    lastName: "Chaijaroen",
    name: "Five",
    generation: 6
};

console.log(`My name is ${me.firstName} ${me.lastName} (${me.name}) - Thinc. ${me.generation}`);
