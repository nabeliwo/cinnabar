import React, { FC, useEffect, useState } from 'react'

import { Beat } from '../../modules/beat'
import { AudioResource, defaultAudios } from '../../modules/audio'

import { Sequence } from '../../components/Sequence'

type Props = {
  beat: Beat
  step: number
}

export const SequenceContainer: FC<Props> = ({ beat, step }) => {
  const [audios, setAudios] = useState<AudioResource[]>([])

  useEffect(() => {
    if (audios.length !== 0) return
    setAudios(defaultAudios)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (audios.length === 0) return

    audios.forEach(audio => {
      console.log(audio)
    })
  }, [audios])

  return <Sequence beatNum={Number(beat)} step={step} />
}
