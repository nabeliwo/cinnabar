import React, { FC } from 'react'
import styled, { css } from 'styled-components'
import { FaSort } from 'react-icons/fa'

import { palette, size } from '../../../constants/theme'

type Props = {
  width: number
  value: string
  options: Array<{
    label: string
    value: string
  }>
  onChange: (value: string) => void
}

export const Select: FC<Props> = ({ width, value, options, onChange }) => (
  <Wrapper width={width}>
    {console.log(options)}
    {console.log(value)}
    <IconWrap>
      <FaSort size={13} color={palette.blue} />
    </IconWrap>
    <SelectBox value={value} onChange={e => onChange(e.currentTarget.value)}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectBox>
  </Wrapper>
)

const Wrapper = styled.div<{ width: number }>`
  ${({ width }) => css`
    position: relative;
    width: ${width}px;
  `}
`
const SelectBox = styled.select`
  position: relative;
  width: 100%;
  padding: 2px ${size.space.xxs}px;
  padding-right: ${size.space.m}px;
  border-radius: 4px;
  border: 1px solid ${palette.blue};
  background-color: transparent;
  font-size: ${size.font.s}px;
  color: ${palette.blue};
  outline: none;
  box-sizing: border-box;
  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 3px 2px ${palette.blue};
  }
`
const IconWrap = styled.span`
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
`
