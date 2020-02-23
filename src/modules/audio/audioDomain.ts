export type AudioResource = {
  name: string
  path: string
  element: HTMLAudioElement | null
}
export const audioResources: AudioResource[] = [
  {
    name: 'snare_3',
    path: '/assets/audio/snare_3.wav',
    element: null,
  },
  {
    name: 'kick_4',
    path: '/assets/audio/kick_4.wav',
    element: null,
  },
]
export const defaultAudios: AudioResource[] = [
  {
    name: 'snare_3',
    path: '/assets/audio/snare_3.wav',
    element: null,
  },
  {
    name: 'kick_4',
    path: '/assets/audio/kick_4.wav',
    element: null,
  },
]
export const setAudioElements = (audios: AudioResource[]) => {
  const newAudios: AudioResource[] = []
  const audioListEl = document.getElementById('audios')

  if (!audioListEl) return

  while (audioListEl.lastChild) {
    audioListEl.removeChild(audioListEl.lastChild)
  }

  audios.forEach(({ name, path }) => {
    const audioEl = document.createElement('audio')

    audioEl.id = `audio-${name}`
    audioEl.src = path
    audioListEl.appendChild(audioEl)
    newAudios.push({
      name,
      path,
      element: audioEl,
    })
  })

  return newAudios
}
