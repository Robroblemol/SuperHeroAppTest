export interface Character {
    id: string;
    name: string;
    idfv: string;
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
