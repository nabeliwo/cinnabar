import { useCallback, useState } from 'react'

import { Beat } from '../../modules/config'

export const useStepTimer = (beat: Beat, bpm: number) => {
  const [active, setActive] = useState(false)
  const [timerID, setTimerID] = useState(0)
  const [step, setStep] = useState(-1)
  const beatNum = Number(beat)
  const allSteps = beatNum * 4
  const stepSpeed = (60 / bpm) * (4 / Number(beat)) * 1000

  const startStepTimer = useCallback(() => {
    if (!active) {
      setTimerID(
        setInterval(() => {
          setStep(prevStep => (prevStep === allSteps - 1 ? 0 : prevStep + 1))
        }, stepSpeed),
      )
    }
  }, [active, allSteps, stepSpeed])

  const stop = () => {
    setActive(false)
    clearInterval(timerID)
    setStep(-1)
    setTimerID(0)
  }

  const start = () => {
    if (!active) {
      clearInterval(timerID)
      startStepTimer()
      setActive(true)
    }
  }

  const toggle = () => {
    if (active) {
      stop()
    } else {
      start()
    }
  }

  return { step, stop, toggle, active }
}
