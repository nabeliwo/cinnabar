import React, { FC } from 'react'
import styled from 'styled-components'

import { palette, size } from '../../constants/theme'
import { Beat, beatEnum } from '../../modules/config'

import { RadioGroup } from '../ui/RadioGroup'

type Props = {
  beat: Beat
  setBeat: (value: string) => void
}

export const Controller: FC<Props> = ({ beat, setBeat }) => (
  <Wrapper>
    <FieldSet>
      <Label>Beat :</Label>
      <RadioGroup
        id="beat-controll"
        radios={[
          {
            value: beatEnum['8'],
            label: beatEnum['8'],
          },
          {
            value: beatEnum['16'],
            label: beatEnum['16'],
          },
          {
            value: beatEnum['32'],
            label: beatEnum['32'],
          },
        ]}
        value={beat}
        onChange={setBeat}
      />
    </FieldSet>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: ${size.space.xs};
  border-top: 1px solid ${palette.white};
`
const FieldSet = styled.div`
  display: flex;
  align-items: center;
`
const Label = styled.p`
  margin-right: ${size.space.xs};
  font-size: ${size.font.m};
`
