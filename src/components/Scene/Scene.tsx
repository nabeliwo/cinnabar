import React, { ComponentProps, FC } from 'react'
import styled from 'styled-components'

import { size } from '../../constants/theme'

import { SequenceContainer } from '../../containers/Sequence'
import { Controller } from '../Controller'

type Props = ComponentProps<typeof SequenceContainer> & ComponentProps<typeof Controller>

export const Scene: FC<Props> = ({ step, beat, setBeat, bpm, setBpm, active, toggle, stop }) => (
  <>
    <SequenceContainer beat={beat} step={step} stop={stop} />
    <Panel>
      <Controller
        beat={beat}
        setBeat={setBeat}
        bpm={bpm}
        setBpm={setBpm}
        active={active}
        toggle={toggle}
      />
    </Panel>
  </>
)

const Panel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${size.space.xs}px;
  box-sizing: border-box;
`
