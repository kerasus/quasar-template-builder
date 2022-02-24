import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
Object.assign(QuasarTemplateBuilderAppLayout.getters, getters);
Object.assign(QuasarTemplateBuilderAppLayout.mutations, mutations);
Object.assign(QuasarTemplateBuilderAppLayout.actions, actions);
import { QuasarTemplateBuilderAppLayout } from '../../../index';

export default {
  namespaced: true,
  getters: QuasarTemplateBuilderAppLayout.getters,
  mutations: QuasarTemplateBuilderAppLayout.mutations,
  actions: QuasarTemplateBuilderAppLayout.actions,
  state
};
