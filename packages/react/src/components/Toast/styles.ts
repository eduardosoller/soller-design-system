import { styled } from '@styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastProvider = Toast.Provider
export const ToastContainer = styled(Toast.Root, {
  backgroundColor: 'white',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '15px',
  display: 'flex',
  columnGap: '15px',
  alignItems: 'center',
})
export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: '5px',
  fontWeight: 500,
  color: '#ffffff',
  fontSize: '15px',
})
export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$gray500',
  fontSize: '13px',
  lineHeight: 1.3,
})
export const ToastAction = Toast.Action
export const ToastClose = Toast.Close
export const ToastViewport = styled(Toast.Viewport, {
  // position: 'fixed',
  // bottom: 0,
  // right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
  gap: '10px',
  width: '390px',
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})
ToastContainer.displayName = 'Toast'
