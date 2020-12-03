import React from 'react'
import { Story, Meta } from '@storybook/react'

import Box from 'src/components/Box'
import FAIcon, { FAIconProps } from './index'

const Template: Story<FAIconProps> = (args) => (
  <Box>
    <FAIcon {...args} />
  </Box>
)

export default {
  title: 'Atoms/FAIcon',
  component: Template,
  argTypes: {
    icon: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
  },
} as Meta

export const Check = Template.bind({})
Check.args = {
  icon: 'check',
  width: '38px',
  spin: false,
}

export const Spinner = Template.bind({})
Spinner.args = {
  icon: 'circle-notch',
  width: '38px',
  spin: true,
}
