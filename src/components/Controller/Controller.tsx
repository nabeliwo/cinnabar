import React, { FC } from 'react'
import styled from 'styled-components'

import { size } from '../../constants/theme'
import { Beat, beatEnum } from '../../modules/config'

import { RadioGroup } from '../ui/RadioGroup'
import { Input } from '../ui/Input'

type Props = {
  beat: Beat
  setBeat: (value: string) => void
  bpm: number
  setBpm: (value: string) => void
}

export const Controller: FC<Props> = ({ beat, setBeat, bpm, setBpm }) => (
  <Wrapper>
    <List>
      <li>
        <Label>Beat</Label>
        <BeatRadios
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
      </li>
      <li>
        <Label>BPM</Label>
        <NumberInput type="number" value={bpm} onChange={value => setBpm(value)} />
      </li>
    </List>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: ${size.space.xs}px;
  border-radius: 4px;
  background-color: #28282c;
`
const List = styled.ul`
  display: flex;
  align-items: flex-start;

  > li:not(:first-child) {
    margin-left: ${size.space.s}px;
  }
`
const Label = styled.p`
  margin-bottom: ${size.space.xxs}px;
  font-size: ${size.font.l}px;
`
const BeatRadios = styled(RadioGroup)`
  padding-top: 6px;
`
const NumberInput = styled(Input)`
  width: 40px;
`
