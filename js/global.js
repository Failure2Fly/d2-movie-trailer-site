// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    constructor(name, id) {
        // 2. Inside the class, add a constructor function that takes two arguments, a name and an id

        // 3. Call the parent constructor function using the super function
        super (); 
            
        // 4. Assign a name and id instance property to the incoming name and id arguments
        this.name = name;
        this.id = id

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
        }
};

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
var whiplash = new Trailer('Whiplash', '7d_jQycdQGo' );
var imitationFilm = new Trailer('The Imitation Game', 'S5CjKEFb-sM' );
var cloverfieldFilm = new Trailer('Cloverfield', 'sQFpMZ6glTo' );
var worldsEndFilm = new Trailer('The Worlds End', 'rQA7HcRcLNg' );
var CptFantasticFilm = new Trailer('Captain Fantastic', 'D1kH4OMIOMc' );
var squidWhaleFilm = new Trailer('The Squid and the Whale', 'usZN7CcVhD0' );
var rushmoreFilm = new Trailer('Rushmore', 'GxCNDpvGyss' );
var bottleRocketFilm = new Trailer('Bottle Rocket', 'ZKo9HWlwVME' );
var childrenOfMenFilm = new Trailer('Children of Men', '2VT2apoX90o' );
var funnyStoryFilm = new Trailer('It\'s Kind of a Funny Story ', 'cyFCpQK-j7U' );
var beachFilm = new Trailer('The Beach', 't99_nC_tYVM' );
var boyhoodFilm = new Trailer('Boyhood', 'Y0oX0xiwOv8' );
var musicWithinFilm = new Trailer('Music Within', 'xpWs04Gsx-U' );
var labyrinthFilm = new Trailer('Pan\'s Labyrinth', '4Evmr2ZCjWc' );
var huckabeesFilm = new Trailer('I Heart Huckabees', '2eOLOmCjRPY' );
var scounrelsFilm = new Trailer('Dirty Rotten Scoundrels', '0ke-v0e3Cd4' );
var rumbleFilm = new Trailer('Ready to Rumble', 'AfTvmbizNyQ' );
var herFilm = new Trailer('Her', 'WzV6mXIOVl4' );
var quartetFilm = new Trailer('A Late Quartet', 'mcfNpaMxlP0' );
var lookoutFilm = new Trailer('The Lookout', 'Xq4GG046GWg' );

$(document).ready(function(){
    $("button").sparkle();
})
