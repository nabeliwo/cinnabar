import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { palette, size } from '../../constants/theme'

import { Beat } from '../../modules/config'

type Props = {
  beat: Beat
  step: number
}

export const Sequence: FC<Props> = ({ beat, step }) => (
  <Wrapper>
    <Inner>
      <Progress step={step} />
      <Resources>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
        <li>
          {[...Array(Number(beat) * 4)].map((_, i) => (
            <Cell key={i} />
          ))}
        </li>
      </Resources>
    </Inner>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: ${size.space.xs};
`
const Inner = styled.div`
  position: relative;
`
const Progress = styled.div<{ step: number }>`
  ${({ step }) => css`
    opacity: 0.3;
    position: absolute;
    top: -4px;
    left: calc(${step} * 28px - 4px);
    width: calc(20px + 8px);
    height: calc(100% + 8px);
    background-color: white;
  `}
`
const Resources = styled.ul`
  > li {
    margin: 0 -4px;

    &:not(:first-child) {
      margin-top: ${size.space.xxs};
    }
  }
`
const Cell = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 4px;
  border-radius: 4px;
  border: 1px solid ${palette.blue};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 2px ${palette.blue};
  }
`
