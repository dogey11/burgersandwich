function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

var quotes = [
    "\"What color is your Bugatti?\"",
    "\"Always pay your friends.\" (me pay me give me money)",
    "\"Everyone has a Lambo or a Ferrari, it's easy.\"",
    "\"The Matrix wants you to lose hope.\"",
    "\"You want to stop playing 'Fortnite,' man, because you aren't having fun anymore?\"",
    "\"I don't know how Jesus does it... I mean I freak out when I have to wait 9 seconds to respawn, Jesus respawn took 3 whole days... RETWEET!\"",
    "\"Hello everybody, my name is Markiplier.\"",
    "\"Elmo loves to learn, learn about it all. The things that are big and the things that are small!\"",
    "\"Is waldorff still doing the ball drop this year?\"",
    "\"Oh my god, it even has a watermark.\""
]

var quote_elem = document.getElementById("tate_quote");
var shuffled_quotes = shuffle(quotes);
var count = 0;
function newQuote() {
    quote_elem.innerHTML = `${shuffled_quotes[count]}`;
    if (count === quotes.length - 1) {
        do {
            shuffled_quotes = shuffle(quotes);
        } while (quote_elem.innerHTML === shuffled_quotes[shuffled_quotes.length]);
        count = 0;
    } else count += 1;
}
newQuote();
var inst = setInterval(newQuote, 10000);
