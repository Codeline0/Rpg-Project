const playerElements = {
    weapons: [{name:"The Blade of Erised", attack:150, speed:"B", category: "greatsword"}, {name:"Astra's Fury", attack:110, speed:"A", category:"reaper"}, {name:"Cagliostro", attack:85, speed:"S", category:"katana"}, {name:"Mjölnir", attack:120, speed:"B", category:"hammer"}, {name:"stic", attack:999, speed:"SSS", category:"stic"}],
    jobs: ["Accountant", "Risk Manager", "Specialist Welder", "Tube Operator", "Dog Walker"],
    companions: ["cat", "dog", "fish", "pangolin", "hispaniolan solenodon"],
    attributes: ["brave", "clean", "sloppy", "alcoholic", "depressed"],
    startingLoc: ["The Great Plains of the Northern Gates", "Royal Plateau", "Vows of the New World", "The Endless Ocean of Despair", "Brazil"]
}

const genRandNum = num => Math.floor(Math.random() * num);
  

function randPlayerElements(obj) {
    let playerElementsArr = [];
    for (el in obj) {
        playerElementsArr.push(obj[el][genRandNum(obj[el].length)])
    }
    console.log(`
    Welcome to this brand new world full of thrill and excitement!
    Are you ready to embark all across the country of Einsga?
    Climb the Catrostoph Mountain on the Litun region,
    find tresures inside the ancient Kuͤd Jungle 
    or adventure inside the Endless Ocean of Despair, where no man has ever walked out unscathed.

    Everything may seem just too perfect, and you would be right.
    Father Gerarld from the church of Myriad Lights requested a boon from our god, Anateus the Great.
    Stats, a weapon, a job, a companion, one attribute and your starting location will all be given to you personally by Anateus the Great.
    This is the greatest of honors, I almost envy you hohoho.
    Now, shall we begin?

    Your boon

    -------------------------------
    
    Stats 

        Strength - ${genRandNum(16)}
        Perception - ${genRandNum(16)}
        Endurance - ${genRandNum(16)}
        Charisma - ${genRandNum(16)} 
        Intelligence - ${genRandNum(16)}
        Agility - ${genRandNum(16)}
        Luck - ${genRandNum(16)}

    The Great Anateus has blessed you with the ${playerElementsArr[0].category} by the name of "${playerElementsArr[0].name}" which has ${playerElementsArr[0].attack} attack points! Not bad at all.
    Your destiny dictates that your job shall be ${playerElementsArr[1]}.
    Your companion, your best friend, your homeslice, shall be a ${playerElementsArr[2]}.
    From now on your attribute, the one which most people will remember and recognize you for, shall be ${playerElementsArr[3]}.
    And lastly, your journey, filled with emotion, tears, blood, and victory, will start in ${playerElementsArr[4]}.

    -------------------------------

    Now go! Live your new life to the fullest!
    Remember to tresure the boon we have given you.

    `)
}

randPlayerElements(playerElements);