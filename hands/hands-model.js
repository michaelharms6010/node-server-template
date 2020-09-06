const db = require("../data/db-config.js");
const Hand = require("../helpers/Hand.js")


module.exports = {
    getAll,
    findById,
    remove,
    update,
    createNew,
    validate
}


function getAll() {
    return db('hands').where({completed: true});
}

function findById(id) {
    return db('hands')
        .where({id})
        .first()
}

function remove(id) {
    return db('hands')
    .where({ id })
    .first()
    .del();
  }


  function update(id, changes) {
    return db('hands')
      .where({id})
      .update(changes, '*').returning("*");
  }

  function createNew() {
      const hand = new Hand();
      const newHand = {
          proof: hand.proof.toString("hex"),
          deck: JSON.stringify(hand.cards),
          hash_count: hand.hashCount

      }
      console.log(newHand)
      return db("hands").insert(newHand)
  }

  async function validate(id) {
    const hand = await db('hands').where({id}).first()
    const validation = new Hand().validate(hand.deck, hand.proof, hand.hash_count)
    const validationObject = {
        deck: JSON.parse(hand.deck),
        proof: hand.proof, 
        hash_count: hand.hash_count,
        valid: validation
    }
    console.log("validationString", validationObject)
    console.log(validation)
    return validation ? validationObject : "The proof appears invalid."
}