import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Text } from '@soller-ui/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    children: <Text>Toast message</Text>,
    description: 'Friday, July 23, 2023',
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    children: <Text>Toast message</Text>,
    description: 'Friday, July 23, 2023',
  }
}
