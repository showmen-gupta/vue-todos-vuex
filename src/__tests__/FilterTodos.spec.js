import Vuex from "vuex";
import { mount, createLocalVue } from "vue-test-utils";
import { __createMocks as createStoreMocks } from "../store/__mocks__/index";
import FilterTodos from "../components/FilterTodos.vue";

jest.mock("../store");

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Todos", () => {
  let storeMocks;
  let wrapper;

  beforeEach(() => {
    storeMocks = createStoreMocks();
    wrapper = mount(FilterTodos, {
      store: storeMocks.store,
      localVue,
    });
  });
  it("Should filter number of todos when change is triggered", async () => {
    const options = wrapper.find("select").findAll("option");
    options.at(2).selected = true;

    wrapper.find("select").trigger("change");

    expect(options.at(2).element.value).toBe("50");
    expect(storeMocks.actions.filterTodos).toBeCalled();
  });
});
