
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
        tbl.increments();
        tbl.string("email");
        tbl.string("password");
        tbl.decimal("balance", 14, 8)
        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users");
};
