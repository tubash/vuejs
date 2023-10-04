import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import SearchForm from "@/components/SearchForm.vue";

const query = 'test query';
const wrapper = mount(SearchForm, {
    attachTo: document.body,
    props: {
        text: query,
    },        
});

test("SearchForm.vue emittion", async () => {
    // click the toggle
    await wrapper.find("input[class='search-input']").setValue(query);
    await wrapper.find("button[class='do-search']").trigger('click');
    // check if the event has been emmitted    
    expect(wrapper.emitted()).toHaveProperty('do-search');
    // assert event has been emitted
    expect(wrapper.emitted('do-search')![0]).toEqual([ query ]);
});
