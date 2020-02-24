import React, { FC } from 'react'
import styled from 'styled-components'

import { palette, size } from '../../constants/theme'
import { Beat, beatEnum } from '../../modules/beat'

import { RadioGroup } from '../ui/RadioGroup'
import { Input } from '../ui/Input'

type Props = {
  beat: Beat
  setBeat: (value: string) => void
  bpm: number
  setBpm: (value: string) => void
  active: boolean
  toggle: () => void
}

export const Controller: FC<Props> = ({ beat, setBeat, bpm, setBpm, active, toggle }) => (
  <Wrapper>
    <List>
      <li>
        <PlayerWrapper>
          <Player onClick={toggle}>{active ? <Square /> : <Triangle />}</Player>
        </PlayerWrapper>
      </li>
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

    <Text>
      Made by{' '}
      <Link href="https://twitter.com/nabeliwo" target="_blank" rel="noopener noreferrer">
        nabeliwo
      </Link>
      . View the source on{' '}
      <Link href="https://github.com/nabeliwo/cinnabar" target="_blank" rel="noopener noreferrer">
        Github
      </Link>
      .
    </Text>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: ${size.space.xs}px;
  border-radius: 4px;
  background-color: #28282c;
`
const PlayerWrapper = styled.div`
  padding: 6px 0;
`
const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${palette.blue};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 2px ${palette.blue};
  }
`
const Triangle = styled.div`
  margin-left: 3px;
  border: 8px solid transparent;
  border-right: 0;
  border-left: 14px solid ${palette.blue};
`
const Square = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${palette.blue};
`
const List = styled.ul`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${size.space.xs}px;

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
const Text = styled.p`
  font-size: ${size.font.m}px;
  text-align: center;
`
const Link = styled.a`
  color: ${palette.blue};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
