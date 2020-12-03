import React from 'react'
import { Story, Meta } from '@storybook/react'

import Heading, { HeadingProps } from './index'

interface TemplateProps extends HeadingProps {
  heading: string
  as?: React.ElementType
}

const Template: Story<TemplateProps> = ({ heading, ...args }) => (
  <Heading {...args}>{heading}</Heading>
)

export default {
  title: 'Atoms/Heading',
  component: Template,
  argTypes: {
    color: { control: 'color' },
    heading: { control: 'text' },
    darkBg: { control: 'boolean' },
    uppercase: { control: 'boolean' },
    fontWeight: {
      control: {
        type: 'range',
        min: 100,
        max: 900,
        step: 100,
      },
    },
  },
} as Meta

export const Heading1 = Template.bind({})
Heading1.args = {
  heading: 'Default Heading',
  fontWeight: 700,
  as: 'h1',
}

export const Heading2 = Template.bind({})
Heading2.args = {
  heading: 'Default Heading',
  fontWeight: 600,
  as: 'h2',
}

export const Heading3 = Template.bind({})
Heading3.args = {
  heading: 'Default Heading',
  fontWeight: 500,
  as: 'h3',
}

export const Heading4 = Template.bind({})
Heading4.args = {
  heading: 'Default Heading',
  fontWeight: 400,
  as: 'h4',
}

export const Heading5 = Template.bind({})
Heading5.args = {
  heading: 'Default Heading',
  fontWeight: 400,
  as: 'h5',
}
