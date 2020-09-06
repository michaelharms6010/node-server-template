
exports.up = function(knex) {
    return knex.schema.createTable("hands", tbl => {
        tbl.increments();
        tbl.string("proof");
        tbl.integer("hash_count");
        tbl.string("deck", 350);
        tbl.boolean("complete").defaultTo(false);
        tbl.string("users_in_hand")
        // hand history? results?
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("hands");
};
