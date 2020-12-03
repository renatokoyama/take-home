import React from 'react'
import { Story, Meta } from '@storybook/react'

import Box from 'src/components/Box'
import Flex, { FlexProps } from './index'

interface TemplateProps extends FlexProps {
  boxCount: number
}

const Template: Story<TemplateProps> = ({ boxCount, ...args }) => (
  <Flex height='750px' {...args}>
    {Array(boxCount)
      .fill(null)
      .map((_, i) => (
        <Box key={i} bg={`secondary.${i}`} height='200px' width='200px' />
      ))}
  </Flex>
)

export default {
  title: 'Atoms/Flex',
  component: Template,
  argTypes: {
    flexDirection: { control: null },
    boxCount: { control: 'number' },
    center: { control: 'boolean' },
  },
} as Meta

export const FlexRow = Template.bind({})
FlexRow.args = {
  flexDirection: 'row',
  boxCount: 3,
  center: false,
}

export const FlexColumn = Template.bind({})
FlexColumn.args = {
  flexDirection: 'column',
  boxCount: 3,
  center: false,
}
