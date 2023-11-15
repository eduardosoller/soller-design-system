import { styled, keyframes } from '../../styles'
import { X } from 'phosphor-react'
const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0)',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(100%)',
  },
})

export const ToastContainer = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray500',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  animation: `${slideIn} 2s ease-out`,
  width: 'auto',
})
export const CloseButton = styled(X, {
  padding: '$1',
  borderRadius: '$sm',
  color: '$gray400',
  display: 'flex',
  alignContent: 'center',
  cursor: 'pointer',
  position: 'absolute',
  top: 20,
  right: 20,
  width: '$5',
  height: '$5',
})

ToastContainer.displayName = 'Toast'
