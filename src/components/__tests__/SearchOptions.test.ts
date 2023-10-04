import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import SearchOptions from "@/components/SearchOptions.vue";

const wrapper = mount(SearchOptions, {
    attachTo: document.body,
    props: {
        elementId: 'testId',
        elementValue: false,
    },        
});

test("SearchOptions.vue template", () => {
    expect(SearchOptions).toBeTruthy();  
    
    expect(wrapper.find("div[class='toggleTitle']").text()).toBe("SEARCH BY");
    expect(wrapper.find("label[class='toggleContainer']").find("div:first-of-type").text()).toBe("TITLE");
    expect(wrapper.find("label[class='toggleContainer']").find("div:last-of-type").text()).toBe("GENRE");

    expect(wrapper.find("input[class='toggleCheckbox']").attributes("id")).toBe('testId');
});

test("SearchOptions.vue emittion", async () => {
    // click the toggle
    await wrapper.find("input[class='toggleCheckbox']").trigger('click');
    // check if the event has been emmitted    
    expect(wrapper.emitted()).toHaveProperty('do-select');
    // assert event has been emitted
    expect(wrapper.emitted('do-select')![0]).toEqual([ true ]);

    // click the toggle
    await wrapper.find("input[class='toggleCheckbox']").trigger('click');
    // assert event has been emitted  
    expect(wrapper.emitted()).toHaveProperty('do-select');
    // assert event payload
    expect(wrapper.emitted('do-select')![1]).toEqual([ false ]);

    // assert event count
    expect(wrapper.emitted('do-select')!.length).toBe(2);
});
