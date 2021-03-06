import Vuex from "vuex";
import { shallow, createLocalVue } from "vue-test-utils";
import { __createMocks as createStoreMocks } from "../store/__mocks__/index";
import Todos from "../components/Todos.vue";

jest.mock("../store");

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Todos", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallow(Todos, {
      store: storeMocks.store,
      localVue,
    });
  });

  it("should fetch todos from store", () => {
    expect(storeMocks.actions.fetchTodos).toBeCalled();
  });

  it("Should update todos in store when double clicked.", () => {
    wrapper.find(".todo").trigger("dblclick");

    expect(storeMocks.actions.updateTodo).toBeCalled();
  });

  it("Should remove todos from store when trash button clicked.", () => {
    wrapper.find(".fa-trash-alt").trigger("click");

    expect(storeMocks.actions.deleteTodo).toBeCalled();
  });
});
