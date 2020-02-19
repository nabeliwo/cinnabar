import React, { FC } from 'react'
import styled from 'styled-components'

import { palette, size } from '../../../constants/theme'

type Props = {
  id: string
  radios: Array<{
    value: string
    label: string
  }>
  value: string
  onChange: (value: string) => void
}

export const RadioGroup: FC<Props> = ({ id, radios, value, onChange }) => (
  <Wrapper>
    {radios.map(radio => {
      const key = `${id}-radio-group-${radio.value}`

      return (
        <li key={key}>
          <Inner>
            <Radio>
              <Input
                id={key}
                type="radio"
                value={radio.value}
                checked={value === radio.value}
                onChange={e => onChange(e.currentTarget.value)}
              />
              <Box />
            </Radio>
            <Label htmlFor={key}>{radio.value}</Label>
          </Inner>
        </li>
      )
    })}
  </Wrapper>
)

const Wrapper = styled.ul`
  display: flex;
  align-items: center;

  > li:not(:first-child) {
    margin-left: ${size.space.xs}px;
  }
`
const Inner = styled.div`
  display: flex;
  align-items: center;
`
const Radio = styled.div`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
`
const Input = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;

  &:hover + span,
  &:focus + span {
    box-shadow: 0 0 3px 2px ${palette.blue};
  }

  &:checked + span::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${palette.blue};
    transform: translate(-50%, -50%);
    content: '';
    pointer-events: none;
  }
`
const Box = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid ${palette.blue};
  box-sizing: border-box;
`
const Label = styled.label`
  padding-left: ${size.space.xxs}px;
  font-size: ${size.font.m}px;
  cursor: pointer;
`
