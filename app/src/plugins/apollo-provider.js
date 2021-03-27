import Vue from 'vue';
import VueApollo from 'vue-apollo';
import client from '../apollo/client';

Vue.use(VueApollo);

export default new VueApollo({
  defaultClient: client,
});
