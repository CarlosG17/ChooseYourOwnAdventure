// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
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
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "He tells you a knock-knock joke about your mom",
            choices: [
                {
                    text: "Tell him to go back to college",
                    nextLevel: "start",
                },
            
                {
                    text: "Laugh",
                    nextLevel: "field",
                },
            ]
        },


        field: {
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
