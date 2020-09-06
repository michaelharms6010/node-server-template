const blake3 = require("blake3");
const Deck = require("./Hand");


const proof = "3285e437c9e48c55fe7bde957449c6fc6f1a8c9dd0747f19ca6875ef7cd99c79"
let hash;
let match = false;
let guesses = 0;
while (!match) {
    let deck = JSON.stringify(new Deck().cards)
    hash = deck
    for (let i = 0; i < 500000 ; i ++) {
        hash = blake3.hash(hash)
        if (hash.toString("hex") === proof) {
            console.log("match found:", hash, proof, deck)
            return
        }
    }
    guesses += 1
    if (guesses % 100 === 0 ) console.log(guesses)
}
