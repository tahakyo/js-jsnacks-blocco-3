// 3. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const soccerTeam = [
    {
        squadName   : 'club africain',
        points      : 0,
        fouls       : 0
    },
    {
        squadName   : 'manchester utd',
        points      : 0,
        fouls       : 0 
    },
    {
        squadName   : 'as roma',
        points      : 0,
        fouls       : 0
    },
]
// assegno i numeri random con foreach
soccerTeam.forEach(team => {
    team.points = Math.floor(Math.random() * 100);
    team.fouls = Math.floor(Math.random() * 100);
});
console.log(soccerTeam);








// generare numero random
Math.floor(Math.random() * 100);

