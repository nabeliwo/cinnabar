import { audioResources } from './audioResources'

export type AudioResource = {
  name: string
  path: string
  element: HTMLAudioElement | null
}
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
export const getAudios = (names: string[]) => {
  const audios = names
    .map(name => audioResources.find(item => item.name === name))
    .filter(item => item)
  return audios as AudioResource[]
}
