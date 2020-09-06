const router = require('express').Router();
const Hands = require('./hands-model');
const restricted = require("../auth/restricted-middleware");
const { exec } = require("child_process")

router.get("/", (req,res) => {
    Hands.getAll().then(hands => {
        res.status(200).json({hands})
    })
    .catch(err => {
        res.status(500).json({message: "error getting all hands"})
    })
})

router.get("/validate/:id", async (req, res) => {
    const message = await Hands.validate(req.params.id)
    res.status(200).json({message})
})

router.get("/:id", (req,res) => {
    Hands.findById(req.params.id).then(hand => {
        hand.complete 
            ? res.status(200).json({hand}) 
            : res.status(200).json({hand: {proof: hand.proof}}) 
    })
    .catch(err => {
        res.status(500).json({message: "couldn't find hand with that id"})
    })
})

router.put("/:id", (req,res) => {
    Hands.update(req.params.id, {complete: true}).then(hand => {
         res.status(200).json({hand}) 
    })
    .catch(err => {
        res.status(500).json({message: "couldn't find hand with that id"})
    })
})


router.post("/newhand", (req,res) => {
    Hands.createNew().then(hand => {
        delete hand.hashCount
        res.status(201).json(hand)
    }).catch(err => res.status(500).json({message: "error creating new hand"}))
})


module.exports = router;