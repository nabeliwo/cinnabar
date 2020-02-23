import React, { FC, useCallback, useEffect, useState } from 'react'

import { Beat } from '../../modules/beat'
import { AudioResource, audioResources, defaultAudios, setAudioElements } from '../../modules/audio'

import { Sequence } from '../../components/Sequence'

type Props = {
  beat: Beat
  step: number
  stop: () => void
}

export const SequenceContainer: FC<Props> = ({ beat, step, stop }) => {
  const [audios, setAudios] = useState<AudioResource[]>([])

  const playAudio = useCallback(
    (audioIndex: number) => {
      const audio = audios[audioIndex]

      if (audio && audio.element) {
        audio.element.pause()
        audio.element.currentTime = 0
        audio.element.play()
      }
    },
    [audios],
  )

  const selectAudio = useCallback(
    (name: string, index: number) => {
      const audio = audioResources.find(item => item.name === name)

      if (!audio) return

      const newAudios = audios.map((item, i) => {
        if (i === index) return audio
        return item
      })

      stop()

      const setAudioResources = setAudioElements(newAudios)
      if (setAudioResources) setAudios(setAudioResources)
    },
    [audios, stop],
  )

  useEffect(() => {
    const setAudioResources = setAudioElements(defaultAudios)
    if (setAudioResources) setAudios(setAudioResources)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Sequence
      beatNum={Number(beat)}
      step={step}
      audios={audios}
      playAudio={playAudio}
      selectAudio={selectAudio}
    />
  )
}
