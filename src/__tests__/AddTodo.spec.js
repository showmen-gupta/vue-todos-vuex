import Vuex from "vuex";
import { shallow, createLocalVue } from "vue-test-utils";
import { __createMocks as createStoreMocks } from "../store/__mocks__/index";
import AddTodo from "../components/AddTodo.vue";

jest.mock("../store");

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Todos", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = shallow(AddTodo, {
      store: storeMocks.store,
      localVue,
    });
  });
  it("Should submit todos when input is filled and submit is clicked.", () => {
    const input = wrapper.find('input[type="text"]');

    input.element.value = "test";
    wrapper.find('input[type="submit"]').trigger("submit");

    expect(storeMocks.actions.addTodo).toBeCalled();
    expect(wrapper.find('input[type="text"]').element.value).toEqual("");
  });
});
