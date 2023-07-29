import { createApp } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

import '../node_modules/bulma/css/bulma.min.css'
import App from './App.vue'

const BASE_URL = 'http://localhost:3000/api';

const httpLink = createHttpLink({
    uri: BASE_URL
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

createApp(App)
    .provide(DefaultApolloClient, apolloClient)
    .mount('#app');
