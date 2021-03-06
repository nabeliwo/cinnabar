import { useCallback, useState } from 'react'

export const useStepTimer = (allSteps: number, speedPerStep: number) => {
  const [active, setActive] = useState(false)
  const [timerID, setTimerID] = useState(0)
  const [step, setStep] = useState(-1)

  const startStepTimer = useCallback(() => {
    if (!active) {
      setTimerID(
        setInterval(() => {
          setStep(prevStep => (prevStep === allSteps - 1 ? 0 : prevStep + 1))
        }, speedPerStep),
      )
    }
  }, [active, allSteps, speedPerStep])

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
