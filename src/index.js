const { ApolloServer } = require('apollo-server')
const { PrismaClient } = require('@prisma/client')
const { resolvers } = require('./resolvers/resolvers');
const fs = require('fs');
const path = require('path');

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

    // datasource
    const prisma = new PrismaClient();


    // Create Server
    const server = new ApolloServer({ 
        typeDefs: fs.readFileSync(
            path.join(__dirname, 'schema/schema.graphql'),
            'utf8'
        ),
        context: {
            prisma,
        },
        resolvers, 
        
    });

    server
        .listen()
        .then(
            ({ url }) => {
                console.log(`🚀 Server ready at ${url}`)
            }
        ); 
} 

startApolloServer()