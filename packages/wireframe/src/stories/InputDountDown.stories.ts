import InputDountDown from '../components/InputCountDown.vue';
export default {
    title: 'Components/InputCountDown',
    component: InputDountDown,
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
};
const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { InputDountDown },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<InputDountDown v-bind="args" />',
});
export const Init: any = Template.bind({});
Init.args = {
    email: '',
    password: ''
};