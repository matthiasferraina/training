import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
    let wrapper;
    const msg = "new message";
    const items = ["Apple", "Computer", "Glass"];
    beforeEach(() => {
        wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        });
    });
    it("renders props.msg when passed", () => {
        expect(wrapper.text()).toMatch(msg);
    });
    it("should capitalize text", () => {
        expect(wrapper.vm.capitalize("tits")).toMatch("TITS");
    });
    it("should not capitalize number", () => {
        expect(wrapper.vm.capitalize(5)).toEqual(5);
    });
    it("count items sould return the number of items", () => {
        expect(wrapper.vm.countItems(items)).toEqual(3);
    });
    it("count items sould throw an error", () => {
        expect(wrapper.vm.countItems(3)).toEqual(-1);
    });
});