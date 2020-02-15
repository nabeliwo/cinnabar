import React, { useState } from 'react'

import { Beat, assertIsBeat, beatEnum } from '../../modules/config'
import { useStepTimer } from '../../hooks/useStepTimer'

import { Scene } from '../../components/Scene'

export const SceneContainer = () => {
  const [beat, setBeat] = useState<Beat>(beatEnum['8'])
  const { step, start } = useStepTimer(Number(beat) * 4)

  const changeBeat = (value: string) => {
    assertIsBeat(value)
    setBeat(value)
  }

  start()

  return <Scene step={step} beat={beat} setBeat={changeBeat} />
}
