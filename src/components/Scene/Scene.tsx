import React, { ComponentProps, FC } from 'react'
import styled from 'styled-components'

import { Sequence } from '../Sequence'
import { Controller } from '../Controller'

type Props = ComponentProps<typeof Sequence> & ComponentProps<typeof Controller>

export const Scene: FC<Props> = ({ step, beat, setBeat }) => (
  <>
    <Sequence beat={beat} step={step} />
    <ControllerWrapper>
      <Controller beat={beat} setBeat={setBeat} />
    </ControllerWrapper>
  </>
)

const ControllerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`
