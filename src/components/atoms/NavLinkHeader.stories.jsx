import { components } from "storybook/internal/components";
import NavLinkHeader from "./NavLinkHeader";
import { MemoryRouter } from "react-router-dom";

export default {
    title: 'javajunction-frontend/components/atoms/NavLinkHeader',
    component: NavLinkHeader,
};

const Template = (args) => (
    <MemoryRouter>
        <NavLinkHeader {...args} />
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