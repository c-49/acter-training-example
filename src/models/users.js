module.exports = function (def) {
    return {
      email: {
        type: def.TEXT('long'),
        allowNull: true
      },
      access: {
        type: def.TEXT('long'),
        allowNull: true
      },
      password: {
        type: def.TEXT('long'),
        allowNull: true
      },
      settings: {
        type: def.TEXT('long'),
        allowNull: true
      }
    };
  };