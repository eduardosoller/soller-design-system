import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Text } from '@soller-ui/react'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    children: [
      <Text key={1}>Toast message</Text>,
      <Text key={2} size={'sm'} css={{ color: '$gray200' }}>
        Friday, July 23, 2023
      </Text>,
    ],
  },
  // argTypes: {
  //   children: {
  //     options: ['Normal', 'Bold', 'Italic'],
  //     mapping: {
  //       Normal: <span>Normal</span>,
  //       Bold: <b>Bold</b>,
  //       Italic: <i>Italic</i>,
  //     },
  //   },
  // }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
