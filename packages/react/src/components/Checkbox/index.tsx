import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { Text } from '@soller-ui/react'

export interface CheckboxProps extends ComponentProps<typeof CheckboxContainer> { }

export function Checkbox(props: CheckboxProps) {
  return (
    <label style={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxContainer defaultChecked id='checkbox' {...props}>
        <CheckboxIndicator asChild>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxContainer>
      <Text>{props.children}</Text>
    </label>
  )
}
Checkbox.displayName = "Checkbox";
