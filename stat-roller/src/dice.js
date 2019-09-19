
function dice(d){
    
    var outcome = Math.ceil(Math.random() * d);

    return (outcome);
}

export function rollStats(gen){
    const arrSum = rolls => rolls.reduce((a,b) => a + b, 0)
    var stats = [];

    if (gen === '3d6'){
        for (var i = 0; i < 6; i++){
            stats.push(threeDSix());
        }
    }
    else if (gen === '4d6'){
        for (i = 0; i < 6; i++){
            stats.push(fourDSixDropLowest());
        }
    }
    else if (gen === 'CR'){
        let sum = 0;
        let rolls = []
        let max_repeats = 0;
        while (true){
            for (i = 0; i < 6; i++){
                stats.push(fourDSixDropLowest());
                rolls.push(stats[i].sum)
            }
            sum = arrSum(rolls);

            if (sum < 70){
                console.log("Sum was " + sum + ". Re-rolling.")
                rolls = [];
                stats = [];
            } else {
                break;
            }
            if (max_repeats === 100){
                console.error("Error generating ability scores! \
                               This should not happen or should \
                               at least be very improbable")
                break;
            }
            max_repeats++;
        }
    }
    
    return stats
}

function threeDSix(){
    var rolls = [];
    for (var i = 0; i < 3; i++){
        rolls.push(dice(6));
    }
    const arrSum = rolls => rolls.reduce((a,b) => a + b, 0)
    const sum = arrSum(rolls);

    return {sum: sum,
            dice: rolls}
}

function fourDSixDropLowest(){
    var rolls = [];
    var min = 6;
    var min_idx = 0;
    for (var i = 0; i < 4; i++){
        const roll = dice(6);
        if (roll < min) {
            min = roll;
            min_idx = i;
        }
        rolls.push(roll);
    }
    const dropped = rolls.splice(min_idx, 1);
    const arrSum = rolls => rolls.reduce((a,b) => a + b, 0);
    const sum = arrSum(rolls);
    rolls.push(dropped);

    return {sum: sum,
            dice: rolls}
}

export function rollHealth(c, level){
    //d12
    var health = [];
    if (["Barbarian"].includes(c)){
        health.push(12);
        for (var i = 0; i < level - 1; i++){
            health.push(dice(12));
        }
    }
    //d10
    if (["Blood Hunter", "Fighter", "Paladin", "Ranger"].includes(c)){
        health.push(10);
        for (i = 0; i < level - 1; i++){
            health.push(dice(10));
        }
    }
    //d8
    if (["Artificer", "Bard", "Cleric",
         "Druid", "Monk", "Rogue", "Warlock"].includes(c)){
            health.push(8);
            for (i = 0; i < level - 1; i++){
                health.push(dice(8));
            }
    }
    //d6
    if (["Sorcerer", "Wizard"].includes(c)){
        health.push(6);
        for (i = 0; i < level - 1; i++){
            health.push(dice(6));
        }
    }
    const arrSum = rolls => rolls.reduce((a,b) => a + b, 0)
    const sum = arrSum(health)

    return {sum: sum,
            dice: health}
}
