/* eslint-disable no-shadow */
// https://nuxtjs.org/guide/vuex-store#the-nuxtserverinit-action

import CART_SORT from '@/json/cartSort.json';

export const state = () => ({
  list: [],
  sort: {
    ...CART_SORT[0],
  },
});

export const mutations = {
  SET_LIST(state, payload) {
    state.list = payload;
  },

  CHANGE_ITEM(state, payload) {
    state.list = state.list
      .map(((item) => ((+item.id === +payload.id) ? { ...payload } : item)));
  },

  DELETE_ITEM(state, id) {
    state.list = state.list.filter(((item) => +item.id !== +id));
  },

  CHANGE_SORT(state, payload) {
    state.sort = payload;
  },
};


export const actions = {
  // eslint-disable-next-line no-unused-vars
};

export const getters = {
  getList: (state) => {
    const { sort, list } = state;
    const map = {
      price: {
        ASC: (a, b) => a.price - b.price,
        DESC: (a, b) => b.price - a.price,
      },
      date: {
        ASC: (a, b) => new Date(a.date) - new Date(b.date),
        DESC: (a, b) => new Date(b.date) - new Date(a.date),
      },
    };

    const methodSort = (map[sort.code] && map[sort.code][sort.value]) || (() => {});

    return [...list].sort(methodSort);
  },

  getItemById: (state) => (id) => {
    const { list } = state;

    return list.find(({ id: itemId }) => +itemId === +id) || {};
  },
};
