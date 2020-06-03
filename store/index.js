/* eslint-disable no-shadow */
// https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action
import LIST from '@/json/cart.json';

export const state = () => ({});

export const mutations = {};

export const actions = {
  // eslint-disable-next-line no-unused-vars
  nuxtServerInit({ commit }) {
    commit('cart/SET_LIST', LIST);

    return Promise.resolve();
  },
};
