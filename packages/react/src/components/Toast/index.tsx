import { ComponentProps, ElementType } from 'react'
import { ToastContainer, CloseButton } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  as?: ElementType
  type: 'success' | 'error'
}

export function Toast({ children, ...props }: ToastProps) {
  return (
    <ToastContainer {...props}>
      <div>{children}</div>
      <CloseButton />
    </ToastContainer>
  )
}
