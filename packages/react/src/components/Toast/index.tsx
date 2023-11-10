import { ComponentProps, ElementType } from 'react'
import { ToastContainer } from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  as?: ElementType
  type: 'success' | 'error'
}

export function Toast({ children, ...props }: ToastProps) {
  return <ToastContainer {...props}>
    <div>{children}</div>
    <X color={'#cccccc'} />
  </ToastContainer>
}