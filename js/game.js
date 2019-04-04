// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "Date Event.mp3",
    background_image: "shiba.jpg",
    levels: {

        start: {
            
            message: "You come across a funny dog",
            choices: [
                {
                    text: "Listen to it's jokes",
                    nextLevel: "joke",
                },

                {
                    text: "Avoid it",
                    nextLevel: "badEnd",
                },
            ]
        },

        joke: {
            background_image: "Funny-Knock-Knock-Jokes11.jpg",
            music: "Comedy.mp3",
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
            music: "Corner.mp3",
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
            music:"Jiichan.mp3",
            background_image: "twenty.png",
            message: "He takes you to a $20 bill and vanishes into thin air, you got money but at what cost",
        },

         badEnding: {
              background_image: "street.jpeg",
              music: "Yak.mp3",
            message: "you lose sight of him and wonder what if",
        },
        badEnd: {
             background_image: "cabin.jpg",
              music: "Rejection.mp3",
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
