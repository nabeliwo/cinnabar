import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Beat, assertIsBeat, beatEnum } from '../../modules/config'
import { useStepTimer } from '../../hooks/useStepTimer'

import { Scene } from '../../components/Scene'

const useEventListener = <T extends Event>(
  eventName: string,
  handler: (e: T) => void,
  element: Element | Window = window,
) => {
  const savedHandler = useRef<(e: T) => void>()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const eventListener = (e: T) => {
      savedHandler.current && savedHandler.current(e)
    }

    element.addEventListener(eventName, eventListener as any)

    return () => {
      element.removeEventListener(eventName, eventListener as any)
    }
  }, [eventName, element])
}

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
