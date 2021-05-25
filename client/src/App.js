import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});
  
class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <p>This is app</p>                
            </ApolloProvider>
        )
    }
}

export default App
