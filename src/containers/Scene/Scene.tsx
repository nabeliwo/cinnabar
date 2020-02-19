import React, { useCallback, useState } from 'react'

import { useEventListener } from '../../hooks/useEventListener'
import { useStepTimer } from '../../hooks/useStepTimer'
import { Beat, assertIsBeat, beatEnum } from '../../modules/config'

import { Scene } from '../../components/Scene'

export const SceneContainer = () => {
  const [beat, setBeat] = useState<Beat>(beatEnum[8])
  const { step, stop, toggle } = useStepTimer(Number(beat) * 4)

  const handleKeyDownSpace = useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 32) {
        toggle()
      }
    },
    [toggle],
  )

  useEventListener('keydown', handleKeyDownSpace)

  const changeBeat = (value: string) => {
    assertIsBeat(value)
    setBeat(value)
    stop()
  }

  return <Scene step={step} beat={beat} setBeat={changeBeat} />
}
