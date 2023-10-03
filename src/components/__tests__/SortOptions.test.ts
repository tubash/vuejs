import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import SortOptions from "@/components/SortOptions.vue";

test("SortOptions.vue", async () => {
    expect(SortOptions).toBeTruthy();
  
    const wrapper = mount(SortOptions);
    expect(wrapper.find("div[class='toggleTitle']").text()).toBe("SORT BY");
    expect(wrapper.find("label[class='toggleContainer']").find("div:first-of-type").text()).toBe("RELEASE DATE");
    expect(wrapper.find("label[class='toggleContainer']").find("div:last-of-type").text()).toBe("RATING");
});
