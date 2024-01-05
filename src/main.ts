import { createApp, h, provide } from 'vue';
import router from './router';
import { apolloClient } from './apolloclient';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { createApolloProvider } from '@vue/apollo-option'
import './style.css'
import App from './App.vue';

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
    return {};
  },

  render: () => h(App),
})
  .use(apolloProvider)
  .use(router)
  .mount("#app");
