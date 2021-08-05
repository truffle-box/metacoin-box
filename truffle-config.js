module.exports = {
  // Uncommenting the defaults below 
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  //networks: {
  //  development: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  },
  //  test: {
  //    host: "127.0.0.1",
  //    port: 7545,
  //    network_id: "*"
  //  }
  //},

  //
  db: {
    // Truffle-DB is disabled by default. 
    enabled: false,
    host: "127.0.0.1",

    // You can also use a local db storage adapter by uncommenting this section
    //
    adapter: {
      name: "sqlite",
      settings: {
        // You may also choose a different directory name
        // Note. it will alwasy be relative to Project Root
        // (the same folder where this file is located.
        directory: ".truffle-db"  
      }
    }                             
  }
};
