import React, { FC, useCallback, useEffect, useState } from 'react'

import { Beat } from '../../modules/beat'
import { AudioResource, defaultAudios, setAudioElements } from '../../modules/audio'

import { Sequence } from '../../components/Sequence'

type Props = {
  beat: Beat
  step: number
}

export const SequenceContainer: FC<Props> = ({ beat, step }) => {
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

  useEffect(() => {
    const audioResources = setAudioElements(defaultAudios)
    if (audioResources) setAudios(audioResources)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Sequence beatNum={Number(beat)} step={step} audios={audios} playAudio={playAudio} />
}
