import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const getters = {
  allTodos: jest.fn().mockReturnValue([
    {
      id: "1",
      title: "Test Title 1",
      completed: true,
    },
    {
      id: "2",
      title: "Test Title 2",
      completed: false,
    },
  ]),
};

export const mutations = {
  setTodos: jest.fn(),
  newTodo: jest.fn(),
  removeTodo: jest.fn(),
  updateTodo: jest.fn(),
};

export const actions = {
  fetchTodos: jest.fn(),
  addTodo: jest.fn(),
  deleteTodo: jest.fn(),
  filterTodos: jest.fn(),
  updateTodo: jest.fn(),
};

export const state = {
  todos: [
    {
      id: "1",
      title: "Test Title 1",
      completed: true,
    },
    {
      id: "2",
      title: "Test Title 2",
      completed: false,
    },
  ],
};

export function __createMocks(
  custom = { getters: {}, mutations: {}, actions: {}, state: {} }
) {
  const mockGetters = Object.assign({}, getters, custom.getters);
  const mockMutations = Object.assign({}, mutations, custom.mutations);
  const mockActions = Object.assign({}, actions, custom.actions);
  const mockState = Object.assign({}, state, custom.state);

  return {
    getters: mockGetters,
    mutations: mockMutations,
    actions: mockActions,
    state: mockState,
    store: new Vuex.Store({
      getters: mockGetters,
      mutations: mockMutations,
      actions: mockActions,
      state: mockState,
    }),
  };
}

export const store = __createMocks().store;
