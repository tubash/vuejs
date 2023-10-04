import { mount } from '@vue/test-utils';
import { expect, test, it } from "vitest";

import ToggleOptions from '@/components/ToggleOptions.vue';


const wrapper = mount(ToggleOptions, {
    attachTo: document.body,
    props: {
        elementId: 'testId',
        elementValue: false,
    },
    slots: {
        'title': 'testTitle',
        'first-option': 'testFirstOption',
        'second-option': 'testSecondOption',
    },
});

test('ToggleOptions.vue', async () => {
    expect(wrapper.find("div[class='toggleTitle']").text()).toBe("testTitle");
    expect(wrapper.find("label[class='toggleContainer']").find("div:first-of-type").text()).toBe("testFirstOption");
    expect(wrapper.find("label[class='toggleContainer']").find("div:last-of-type").text()).toBe("testSecondOption");
    expect((wrapper.find("input[class='toggleCheckbox']").element as HTMLInputElement).checked).toBeFalsy();

    expect(wrapper.find("input[class='toggleCheckbox'").attributes("id")).toBe('testId');

    // click the toggle
    await wrapper.find("input[class='toggleCheckbox'").trigger('click');
    // check if the event has been emmitted    
    expect(wrapper.emitted()).toHaveProperty('do-toggle');
    // assert event has been emitted
    expect(wrapper.emitted('do-toggle')![0]).toEqual([ true ]);

    // click the toggle
    await wrapper.find("input[class='toggleCheckbox'").trigger('click');
    // assert event has been emitted  
    expect(wrapper.emitted()).toHaveProperty('do-toggle');
    // assert event payload
    expect(wrapper.emitted('do-toggle')![1]).toEqual([ false ]);

    // assert event count
    expect(wrapper.emitted('do-toggle')!.length).toBe(2);
});
