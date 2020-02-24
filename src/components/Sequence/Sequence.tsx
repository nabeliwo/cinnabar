import React, { FC } from 'react'
import styled, { css } from 'styled-components'

import { palette, size } from '../../constants/theme'
import { AudioResource, audioResources } from '../../modules/audio'

import { Select } from '../ui/Select'
import { Cell } from '../Cell'

const SELECT_SIZE = 72
const CELL_SIZE = 20
const CELL_MARGIN = 4

const audioOptions = [
  {
    value: '',
    label: 'select',
  },
  ...audioResources.map(audio => ({
    value: audio.name,
    label: audio.name,
  })),
]

type Props = {
  beatNum: number
  step: number
  audios: AudioResource[]
  playAudio: (resourceIndex: number) => void
  selectAudio: (name: string, index: number) => void
  addAudio: () => void
}

export const Sequence: FC<Props> = ({
  beatNum,
  step,
  audios,
  playAudio,
  selectAudio,
  addAudio,
}) => (
  <Wrapper allSteps={beatNum * 4}>
    <ResourceWrapper>
      <Resources>
        {audios.map((audio, i) => (
          <li key={`resource-${i}-${audio.name}`}>
            <Select
              width={SELECT_SIZE}
              value={audio.name}
              options={audioOptions}
              onChange={value => selectAudio(value, i)}
            />
          </li>
        ))}
      </Resources>

      <AddButtonWrapper>
        <AddButton onClick={addAudio}>＋</AddButton>
      </AddButtonWrapper>
    </ResourceWrapper>

    <Table>
      {step >= 0 && <Progress step={step} />}

      <Separater part={1} beat={beatNum} />
      <Separater part={2} beat={beatNum} />
      <Separater part={3} beat={beatNum} />

      <Rows>
        {audios.map((audio, i) => (
          <li key={`sequence-${i}-${audio.name}`}>
            {[...Array(beatNum * 4)].map((_, j) => (
              <CellWrapper key={`sequence-${i}-${audio.name}-${j}`}>
                <Cell
                  currentStep={step}
                  stepIndex={j}
                  resourceIndex={i}
                  cellSize={CELL_SIZE}
                  playAudio={playAudio}
                />
              </CellWrapper>
            ))}
          </li>
        ))}
      </Rows>
    </Table>
  </Wrapper>
)

const Wrapper = styled.div<{ allSteps: number }>`
  display: flex;
  align-items: flex-start;
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
const ResourceWrapper = styled.div`
  padding-right: ${size.space.xs}px;
`
const Resources = styled.ul`
  > li:not(:first-child) {
    margin-top: ${CELL_MARGIN * 2}px;
  }
`
const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${size.space.xs}px;
`
const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 1px 0 0 1px;
  border-radius: 50%;
  background-color: ${palette.blue};
  color: ${palette.white};
  font-size: ${size.font.l}px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 3px 2px ${palette.blue};
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
