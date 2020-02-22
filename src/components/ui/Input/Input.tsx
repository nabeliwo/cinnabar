import React, { FC } from 'react'
import styled from 'styled-components'

import { palette, size } from '../../../constants/theme'

type Props = {
  type: string
  value: string | number
  className?: string
  onChange: (value: string) => void
}

export const Input: FC<Props> = ({ type, value, className = '', onChange }) => (
  <StyledInput
    className={className}
    type={type}
    value={value}
    onChange={e => onChange(e.currentTarget.value)}
  />
)

const StyledInput = styled.input`
  padding: 4px ${size.space.xxs}px;
  border-radius: 4px;
  border: 1px solid ${palette.blue};
  font-size: ${size.font.m}px;

  &:hover,
  &:focus {
    box-shadow: 0 0 3px 2px ${palette.blue};
  }
`
