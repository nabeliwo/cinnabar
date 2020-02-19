import React, { FC } from 'react'
import styled from 'styled-components'

import { size } from '../../constants/theme'
import { Beat, beatEnum } from '../../modules/config'

import { RadioGroup } from '../ui/RadioGroup'

type Props = {
  beat: Beat
  setBeat: (value: string) => void
}

export const Controller: FC<Props> = ({ beat, setBeat }) => (
  <Wrapper>
    <Label>Beat</Label>
    <RadioGroup
      id="beat-controll"
      radios={[
        {
          value: beatEnum[8],
          label: beatEnum[8],
        },
        {
          value: beatEnum[16],
          label: beatEnum[16],
        },
        {
          value: beatEnum[32],
          label: beatEnum[32],
        },
      ]}
      value={beat}
      onChange={setBeat}
    />
  </Wrapper>
)

const Wrapper = styled.div`
  padding: ${size.space.xs}px;
  border-radius: 4px;
  background-color: #28282c;
`
const Label = styled.p`
  margin-bottom: ${size.space.xxs}px;
  font-size: ${size.font.l}px;
`
