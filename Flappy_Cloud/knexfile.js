// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './Flappy_Cloud/backend/data/flappyDB.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'ddnv65og3gdf7l',
      user: 'trrjrnyzupimxh',
      password: '4b7b7af3511307968c563aa225550a5f72360aa2615bf0434a081e334415d72a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'ddnv65og3gdf7l',
      user: 'trrjrnyzupimxh',
      password: '4b7b7af3511307968c563aa225550a5f72360aa2615bf0434a081e334415d72a'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
