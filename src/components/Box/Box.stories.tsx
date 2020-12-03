import React from 'react'
import { Story, Meta } from '@storybook/react'

import Box, { BoxProps } from './index'

const Template: Story<BoxProps> = (args) => (
  <Box bg='primary.5' {...args}>
    This is some content in a box
  </Box>
)

export default {
  title: 'Atoms/Box',
  component: Template,
  argTypes: {},
} as Meta

export const InlineBlock = Template.bind({})
InlineBlock.args = {
  display: 'inline-block',
}

export const MarginAndPadding = Template.bind({})
MarginAndPadding.args = {
  my: 2,
  p: 2,
}
MarginAndPadding.argTypes = {
  my: {
    description: 'y-axis margin',
  },
  p: {
    description: 'padding',
  },
}
