import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@soller-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    children: 'Accept the terms',
  }
}




