import { components } from "storybook/internal/components";
import Navlink from "./Navlink";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'javajunction-frontend/components/atoms/Navlink',
    component: Navlink,
};

const Template = (args) => (
    <MemoryRouter>
        <Navlink {...args} />
    </MemoryRouter>
);

// Coffee Story
export const Coffee = Template.bind({});
Coffee.args = {
    link: '/coffee',
    title: 'Coffee',
};

// Tea Story
export const Tea = Template.bind({});
Tea.args = {
    link: '/tea',
    title: 'Tea',
};

// About Us Story
export const AboutUs = Template.bind({});
AboutUs.args = {
    link: '/about-us',
    title: 'About us',
};