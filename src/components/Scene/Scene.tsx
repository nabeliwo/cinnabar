import React, { ComponentProps, FC } from 'react'
import styled from 'styled-components'

// import { palette } from '../../constants/theme'

import { Sequence } from '../Sequence'
import { Controller } from '../Controller'
import { size } from '../../constants/theme'

type Props = ComponentProps<typeof Sequence> & ComponentProps<typeof Controller>

export const Scene: FC<Props> = ({ step, beat, setBeat }) => (
  <>
    <Graphic>
      <Sequence beat={beat} step={step} />
    </Graphic>
    <Panel>
      <Controller beat={beat} setBeat={setBeat} />
    </Panel>
  </>
)

const Graphic = styled.div`
  padding: ${size.space.xs};
`
const Panel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${size.space.xs};
  box-sizing: border-box;
`
