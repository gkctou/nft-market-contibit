import InputCountDown from '../components/InputCountDown.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
    title: 'Components/InputCountDown',
    component: InputCountDown,
    // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
        // onClick: {},
        // size: {
        //     control: { type: 'select' },
        //     options: ['small', 'medium', 'large'],
        // },

        email: {
            name: 'Account',
            type: { name: 'string', required: true },
            description: 'login email account',
            table: {
                type: {
                    summary: 'something short',
                    detail: 'something really really long'
                },
                defaultValue: { summary: 'Hello' },
            },
            // control: {
            //     type: null
            // }
        }
    },
    // decorators: [(Story, args) => {
    //     return {
    //         components: { Story },
    //         template: '<div style="margin: 1em;width:400px;"><Story /></div>'
    //     };
    // }]
} as Meta<typeof InputCountDown>;

const Template: StoryFn<typeof InputCountDown> = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { InputCountDown },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<div style="width:350px;padding:1em;"><InputCountDown v-bind="args" /></div>'
});

export const Init: StoryFn<typeof InputCountDown> = Template.bind({});
Init.args = {
    email: '',
    password: ''
};
// Init.decorators = [() => ({ template: '<div style="margin: 3em;"><story /></div>' })];