import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@soller-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (<>Elemento box</>)
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
}


