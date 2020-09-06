const blake3 = require("blake3")


const deck = JSON.stringify([
    "8c",
    "10s",
    "2s",
    "2h",
    "ah",
    "2c",
    "5s",
    "qc",
    "qd",
    "qs",
    "js",
    "3c",
    "3s",
    "7c",
    "10h",
    "9h",
    "9d",
    "kd",
    "4h",
    "8d",
    "6s",
    "ad",
    "ks",
    "jd",
    "as",
    "4c",
    "8s",
    "kh",
    "10c",
    "4s",
    "5h",
    "7d",
    "5d",
    "jc",
    "5c",
    "3h",
    "8h",
    "9c",
    "7s",
    "jh",
    "6h",
    "ac",
    "4d",
    "2d",
    "6c",
    "qh",
    "9s",
    "kc",
    "10d",
    "7h",
    "6d",
    "3d"
])
let hash = deck;
for( let i = 0; i < 48585; i++) {
    hash = blake3.hash(hash)
}

console.log(hash.toString("hex"))