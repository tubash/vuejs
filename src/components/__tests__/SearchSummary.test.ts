import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import SearchSummary from "@/components/SearchSummary.vue";

test("SearchSummary.vue", async () => {
    expect(SearchSummary).toBeTruthy();
  
    const amountValue = 11;
    const wrapper = mount(SearchSummary, {
        props: {
            amount: amountValue,
        },
    });

    expect(wrapper).toBeTruthy;
    expect(wrapper.text()).toBe(`${amountValue} movies found`);
});
