exports.up = function(knex) {
    return knex.schema.createTable("users_hands", tbl => {
        tbl.increments();

        tbl.integer("user_id")
            .references("id")
            .inTable("hands")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

        tbl.integer("hand_id")
            .references("id")
            .inTable("hands")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users_hands");
};
