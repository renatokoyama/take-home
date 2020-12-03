import { Meta, Story } from '@storybook/react'
import Button, { ButtonProps } from './index'

const Template: Story<ButtonProps> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>
}

export default {
  title: 'Atoms/Button',
  component: Template,
  args: {
    width: '50%',
    height: '50%',
    padding: 2,
  },
  argTypes: {
    bg: { control: 'color' },
  },
} as Meta

export const Default = Template.bind({})
Default.args = {
  children: `Test Button`,
}

export const Icon = Template.bind({})
Icon.args = {
  icon: 'pen',
}
