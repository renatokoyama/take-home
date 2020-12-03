import React from 'react'
import { Story, Meta } from '@storybook/react'
import Input, { InputProps } from './index'

const Template: Story<InputProps> = (args) => {
  return <Input {...args} />
}

export default {
  title: 'Atoms/Input',
  component: Template,
} as Meta

export const Simple = Template.bind({})
