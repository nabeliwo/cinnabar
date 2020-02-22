import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { palette, size } from '../../constants/theme'

import { Cell } from '../Cell'

const SELECT_SIZE = 40
const CELL_SIZE = 20
const CELL_MARGIN = 4

type Props = {
  beatNum: number
  step: number
}

export const Sequence: FC<Props> = ({ beatNum, step }) => (
  <Wrapper allSteps={beatNum * 4}>
    <Resources>
      <li>hoge</li>
      <li>hoge</li>
    </Resources>

    <Table>
      {step >= 0 && <Progress step={step} />}

      <Separater part={1} beat={beatNum} />
      <Separater part={2} beat={beatNum} />
      <Separater part={3} beat={beatNum} />

      <Rows>
        <li>
          {[...Array(beatNum * 4)].map((_, i) => (
            <CellWrapper key={i}>
              <Cell currentStep={step} stepIndex={i} resourceIndex={0} cellSize={CELL_SIZE} />
            </CellWrapper>
          ))}
        </li>
        <li>
          {[...Array(beatNum * 4)].map((_, i) => (
            <CellWrapper key={i}>
              <Cell currentStep={step} stepIndex={i} resourceIndex={1} cellSize={CELL_SIZE} />
            </CellWrapper>
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
const Separater = styled.div<{ part: number; beat: number }>`
  ${({ part, beat }) => css`
    position: absolute;
    top: -${CELL_MARGIN}px;
    left: ${CELL_SIZE * part * beat + CELL_MARGIN * 2 * (part * beat - 1) + CELL_MARGIN}px;
    opacity: 0.4;
    width: 1px;
    height: calc(100% + ${CELL_MARGIN * 2}px);
    background-color: #fff;
    content: '';
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
const CellWrapper = styled.div`
  display: inline-block;
  margin: 0 ${CELL_MARGIN}px;
`
