// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "shiba.jpg",
    levels: {

        start: {
            
            message: "You come across a funny dog",
            choices: [
                {
                    text: "Listen to it's jokes",
                    nextLevel: "cave",
                },

                {
                    text: "Avoid it",
                    nextLevel: "badEnd",
                },
            ]
        },

        cave: {
            background_image: "Funny-Knock-Knock-Jokes11.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "He tells you a knock-knock joke about your mom",
            choices: [
                {
                    text: "Tell him to go back to college",
                    nextLevel: "badEnd",
                },
            
                {
                    text: "Laugh",
                    nextLevel: "bow",
                },
            ]
        },
        
        bow: {
            background_image: "Bow.jpg",
            
            message: "He bows and motions for you to follow",
            choices: [
                {
                    text: "follow",
                    nextLevel: "ending",
                },

                {
                    text: "It's a dog and it bowed so no",
                    nextLevel: "badEnding",
                },
            ]
        },
        ending: {
            
            message: "He takes you to a $20 bill and vanishes into thin air, you got money but at what cost",
        },

         badEnding: {
            message: "you lose sight of him and wonder what if",
        },
        badEnd: {
             background_image: "cabin.jpg",
            message: "You go home to your quiet house, no one is home, you wonder what if",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
