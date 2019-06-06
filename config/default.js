module.exports = {
    reactor: {
      server: {
        // By default, will try port 8000 and use the next available, override here.
        port: 8000,
        // By default, will use your package.json version, but you can override here.
        version: "0.6.9",
        // Default will output fancy "Acter". Override here.
        logo: "test",
        // The datasource
        // persistence: 'mysql://root:Makeitso1@localhost/admin',
        // If we're hosting static files or not.
        statics: {
          active: true,
          endpoint: "/remote",
          folder: "statics" // The root of your source file + /statics
        }
      },
      services: {
        defaults: {
          model: {
            freezeTableName: true
          },
          pagination: {
            default: 20,
            max: 1000
          }
        },
        definitions: {
          'call': {auto: false}
        }
      }
    }
  };
  