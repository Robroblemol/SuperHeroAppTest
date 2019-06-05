export default interface Character {
    id: number;
    name: string;
    powerstats: {};
    biography:{
        fullName: string,
        alter_egos: string,
        aliases:[],
    };
    appearance:{};
    work:{};
    connections:{};
    image:{};
}
