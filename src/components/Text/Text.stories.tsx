import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react'

import Text, { TextProps } from './index'

const Template: Story<TextProps> = (args) => (
  <Text {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue varius
    mauris at sagittis. Maecenas eget odio aliquet, facilisis metus quis, tempor
    felis. Aenean iaculis fermentum quam sodales gravida. Ut lobortis ante eget
    luctus porttitor. Quisque sed vestibulum enim, eget aliquet nunc. Quisque
    sed finibus mauris, eu volutpat dui. Donec tempor non ipsum at consectetur.
  </Text>
)

export default {
  title: 'Atoms/Text',
  component: Template,
  argTypes: {
    color: { control: 'color' },
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

export const Primary = Template.bind({})
Primary.args = {
  fontWeight: 300,
}
