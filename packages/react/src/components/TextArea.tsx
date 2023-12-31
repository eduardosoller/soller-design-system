import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  minHeight: 80,
  resize: 'vertical',
  display: 'flex',
  alignItems: 'baseline',

  '&:focus': {
    outline: 0,
    borderColor: '$soller300',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  '&:placeholder': {
    color: '$gray400',
  },
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> {
  as?: ElementType
}

TextArea.displayName = 'TextArea'
