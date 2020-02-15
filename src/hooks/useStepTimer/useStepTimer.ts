import { useCallback, useEffect, useState } from 'react'

export const useStepTimer = (allStep: number) => {
  const [active, setActive] = useState(false)
  const [timerObj, setTimerObj] = useState(0)
  const [step, setStep] = useState(0)

  const startStepTimer = useCallback(() => {
    if (!active) {
      setTimerObj(
        setInterval(() => {
          setStep(prevStep => (prevStep === allStep - 1 ? 0 : prevStep + 1))
        }, 250),
      )
    }
  }, [active, allStep])

  const stop = () => {
    setActive(false)
    clearInterval(timerObj)
  }

  const start = () => {
    if (!active) {
      clearInterval(timerObj)
      startStepTimer()
      setActive(true)
    }
  }

  useEffect(() => {
    startStepTimer()
    setActive(true)

    return () => stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { step, start, stop }
}
