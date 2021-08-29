const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

async function startApolloServer() {
    const port = process.env.PORT || 9090;

    // Setup Enviroments 
    const configurations = {
        // Note: You may need sudo to run on port 443
        production: { ssl: true, port: 443, hostname: 'kejith.de' },
        development: { ssl: false, port: 4000, hostname: 'localhost' },
    };

    const environment = process.env.NODE_ENV || 'production';
    const config = configurations[environment];    


    // Create Server
    const server = new ApolloServer({ resolvers, typeDefs });
    server.listen().then(
        ({ url }) => {
            console.log(`🚀 Server ready at ${url}`)
        }
    );
}

startApolloServer()