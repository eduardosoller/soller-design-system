import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, Text } from '@soller-ui/react'
import { colors } from '@soller-ui/tokens'

export default {
  title: 'Feedback/Toast',
  component: Toast,
  args: {
    children: [<><Text>Testando o elemento Toast</Text><Text size={'sm'} css={{ color: '$gray200' }}>Em 20 de julho</Text></>],
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

export const Primary: StoryObj<ToastProps> = {
}


