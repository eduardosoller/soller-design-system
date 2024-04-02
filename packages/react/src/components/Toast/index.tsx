import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastViewport,
  ToastTitle,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  description: string
}

export function Toast(
  { children }: { children: React.ReactNode },
  props: ToastProps,
) {
  return (
    <ToastProvider>
      <ToastContainer duration={100000}>
        <ToastTitle>{children}</ToastTitle>
        <ToastDescription asChild>
          <small>DESC-{props.description}</small>
        </ToastDescription>
        <ToastAction altText="Undo" />
        <ToastClose />
      </ToastContainer>
      <ToastViewport />
    </ToastProvider>
  )
}
Toast.displayName = 'Toast'
