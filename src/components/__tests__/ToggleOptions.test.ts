import { mount } from '@vue/test-utils';
import { expect, test } from "vitest";

import ToggleOptions from '@/components/ToggleOptions.vue';

test('ToggleOptions.vue', () => {
    const wrapper = mount(ToggleOptions, {
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
    expect(wrapper.find("div[class='toggleTitle']").text()).toBe("testTitle");
    expect(wrapper.find("label[class='toggleContainer']").find("div:first-of-type").text()).toBe("testFirstOption");
    expect(wrapper.find("label[class='toggleContainer']").find("div:last-of-type").text()).toBe("testSecondOption");
    expect((wrapper.find("input[class='toggleCheckbox']").element as HTMLInputElement).checked).toBeFalsy();    
});
