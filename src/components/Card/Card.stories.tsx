import React from 'react'
import { Story, Meta } from '@storybook/react'

import Box from 'src/components/Box'
import Text from 'src/components/Text'
import Card, { CardProps } from './index'

const Template: Story<CardProps> = ({ children, ...args }) => {
  return (
    <Card {...args}>
      <Box>
        <Text>{children}</Text>
      </Box>
    </Card>
  )
}

export default {
  title: 'Atoms/Card',
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
  children:
    // eslint-disable-next-line max-len
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
    vehicula aliquet orci eget vehicula. In elementum sed velit eget
    ultricies. Duis libero enim, blandit a luctus dignissim, fermentum a
    augue. Nam fermentum, ligula ut vestibulum faucibus, mi metus tempus urna,
    quis elementum arcu nibh id quam. Etiam dictum tincidunt justo. Mauris
    ligula ex, molestie quis nibh sit amet, vehicula pellentesque dui. Ut
    risus neque, varius in sagittis et, semper vitae turpis. Nam facilisis
    enim a orci gravida accumsan. Duis egestas dolor eu dui ultrices, eu
    sollicitudin ex sagittis. Duis ac eros id dui semper commodo non sit amet
    velit. Nullam consequat posuere volutpat. Curabitur ornare sapien ex, vel
    eleifend leo condimentum vel. Quisque eu elit neque. Nulla et augue
    fringilla, lobortis erat et, fringilla tellus. Morbi iaculis mattis erat
    ac rhoncus. Nulla volutpat ipsum ut aliquam aliquet. Vestibulum ultrices,
    mi nec scelerisque gravida, arcu nisl tristique lectus, ut lobortis nunc
    nibh ac arcu. Nulla vehicula dui vitae tellus dictum condimentum. Orci
    varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Cras nibh erat, blandit egestas porttitor ut, porta sed
    sem. Quisque mauris enim, laoreet vel nulla in, maximus ornare diam.
    Curabitur pellentesque turpis mi, et pellentesque leo placerat at. Duis
    rhoncus ex ligula, a sagittis dolor tincidunt non.`,
}
