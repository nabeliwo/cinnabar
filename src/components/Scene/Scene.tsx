import React, { ComponentProps, FC } from 'react'
import styled from 'styled-components'

import { Sequence } from '../Sequence'
import { Controller } from '../Controller'
import { size } from '../../constants/theme'

type Props = ComponentProps<typeof Sequence> & ComponentProps<typeof Controller>

export const Scene: FC<Props> = ({ step, beat, setBeat, bpm, setBpm, active, toggle }) => (
  <>
    <Sequence beat={beat} step={step} />
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
