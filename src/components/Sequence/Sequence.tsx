import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { palette, size } from '../../constants/theme'

import { Beat } from '../../modules/config'

const SELECT_SIZE = 40
const CELL_SIZE = 20
const CELL_MARGIN = 4

type Props = {
  beat: Beat
  step: number
}

export const Sequence: FC<Props> = ({ beat, step }) => (
  <Wrapper allSteps={Number(beat) * 4}>
    <Resources>
      <li>hoge</li>
      <li>hoge</li>
    </Resources>
    <Table>
      {step >= 0 && <Progress step={step} />}

      <Rows>
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
      </Rows>
    </Table>
  </Wrapper>
)

const Wrapper = styled.div<{ allSteps: number }>`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: ${size.space.xs}px;

  ${({ allSteps }) => css`
    position: relative;
    width: ${CELL_SIZE * allSteps +
      CELL_MARGIN * 2 * (allSteps - 1) +
      SELECT_SIZE +
      size.space.xs}px;
  `}
`
const Resources = styled.ul`
  margin-right: ${size.space.xs}px;

  > li {
    width: ${SELECT_SIZE}px;
    height: ${CELL_SIZE}px;
    border-radius: 4px;
    border: 1px solid ${palette.blue};
    box-sizing: border-box;

    &:not(:first-child) {
      margin-top: ${CELL_MARGIN * 2}px;
    }
  }
`
const Table = styled.div`
  position: relative;
`
const Progress = styled.div<{ step: number }>`
  ${({ step }) => css`
    opacity: 0.3;
    position: absolute;
    top: -${CELL_MARGIN}px;
    left: ${step * (CELL_SIZE + CELL_MARGIN * 2) - CELL_MARGIN}px;
    width: ${CELL_SIZE + CELL_MARGIN * 2}px;
    height: calc(100% + ${CELL_MARGIN * 2}px);
    background-color: #fff;
  `}
`
const Rows = styled.ul`
  > li {
    display: inline-block;
    margin: 0 -${CELL_MARGIN}px;

    &:not(:first-child) {
      margin-top: ${CELL_MARGIN * 2}px;
    }
  }
`
const Cell = styled.div`
  display: inline-block;
  width: ${CELL_SIZE}px;
  height: ${CELL_SIZE}px;
  margin: 0 ${CELL_MARGIN}px;
  border-radius: 4px;
  border: 1px solid ${palette.blue};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 3px 2px ${palette.blue};
  }
`
