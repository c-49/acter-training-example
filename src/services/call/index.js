module.exports = function(config) {
  return {
    //default
    // async get(id, params) {
    //   return "Hello!" + id + JSON.stringify(params)
    // }
    //chat example
    async get(msg) {
      return 'Hello,' + ' ' + msg + '! ' + '- from your friends at Transactive.io'
    }
  };
};
