class Team {
    constructor(name, points, fouls) {
        this.name = name;
        this.points = points;
        this.fouls = fouls;
    }
}

const soccerTeam = [];
const clubAfricain = new Team('club africain',Math.floor(Math.random() * 100),Math.floor(Math.random() * 100));
const manchesterUtd = new Team('manchester utd',Math.floor(Math.random() * 100),Math.floor(Math.random() * 100));
const asRoma = new Team('as roma',Math.floor(Math.random() * 100),Math.floor(Math.random() * 100));
const tunisia = new Team('tunisia fc',Math.floor(Math.random() * 100),Math.floor(Math.random() * 100));
soccerTeam.push(clubAfricain, manchesterUtd, asRoma, tunisia);
console.log(soccerTeam);




