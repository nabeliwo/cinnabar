import React, { FC, useCallback, useState } from 'react'
import styled, { css } from 'styled-components'

import { palette } from '../../constants/theme'

type Props = {
  currentStep: number
  stepIndex: number
  resourceIndex: number
  cellSize: number
  playAudio: (resourceIndex: number) => void
}

export const Cell: FC<Props> = ({ currentStep, stepIndex, resourceIndex, cellSize, playAudio }) => {
  const [active, setActive] = useState(false)
  const handleClick = useCallback(() => {
    setActive(!active)
  }, [active])

  if (currentStep === stepIndex && active) {
    playAudio(resourceIndex)
  }

  return <Wrapper className={active ? 'active' : ''} cellSize={cellSize} onClick={handleClick} />
}

const Wrapper = styled.div<{ cellSize: number }>`
  ${({ cellSize }) => css`
    width: ${cellSize}px;
    height: ${cellSize}px;
    border-radius: 4px;
    border: 1px solid ${palette.blue};
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 3px 2px ${palette.blue};
    }

    &.active {
      background-color: #0087ff;
      box-shadow: 0 0 12px 0 rgba(0, 135, 255, 0.8);
    }
  `}
`
