import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import SearchOptions from "@/components/SearchOptions.vue";

test("SearchOptions.vue", async () => {
    expect(SearchOptions).toBeTruthy();
  
    const wrapper = mount(SearchOptions);
    expect(wrapper.find("div[class='toggleTitle']").text()).toBe("SEARCH BY");
    expect(wrapper.find("label[class='toggleContainer']").find("div:first-of-type").text()).toBe("TITLE");
    expect(wrapper.find("label[class='toggleContainer']").find("div:last-of-type").text()).toBe("GENRE");
});
