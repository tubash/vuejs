import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import SortOptions from "@/components/SortOptions.vue";

const wrapper = mount(SortOptions, {
    attachTo: document.body,
    props: {
        elementId: 'testId',
        elementValue: false,
    },        
});

test("SortOptions.vue", async () => {
    expect(SortOptions).toBeTruthy();
  
    expect(wrapper.find("div[class='toggleTitle']").text()).toBe("SORT BY");
    expect(wrapper.find("label[class='toggleContainer']").find("div:first-of-type").text()).toBe("RELEASE DATE");
    expect(wrapper.find("label[class='toggleContainer']").find("div:last-of-type").text()).toBe("RATING");

    expect(wrapper.find("input[class='toggleCheckbox'").attributes("id")).toBe('testId');

    // click the toggle
    await wrapper.find("input[class='toggleCheckbox'").trigger('click');
    // check if the event has been emmitted    
    expect(wrapper.emitted()).toHaveProperty('do-sort');
    // assert event has been emitted
    expect(wrapper.emitted('do-sort')![0]).toEqual([ true ]);

    // click the toggle
    await wrapper.find("input[class='toggleCheckbox'").trigger('click');
    // assert event has been emitted  
    expect(wrapper.emitted()).toHaveProperty('do-sort');
    // assert event payload
    expect(wrapper.emitted('do-sort')![1]).toEqual([ false ]);

    // assert event count
    expect(wrapper.emitted('do-sort')!.length).toBe(2);
});
