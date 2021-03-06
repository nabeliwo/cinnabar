import { AudioResource } from './audioDomain'

export const audioResources: AudioResource[] = [
  'arp_1',
  'arp_2',
  'arp_3',
  'arp_4',
  'crash_1',
  'crash_2',
  'hihat_1',
  'hihat_2',
  'hihat_3',
  'hihat_4',
  'hihat_5',
  'hihat_6',
  'hihat_7',
  'kick_1',
  'kick_2',
  'kick_3',
  'kick_4',
  'kick_5',
  'kick_6',
  'kick_7',
  'kick_8',
  'kick_9',
  'kick_10',
  'kick_11',
  'kick_12',
  'openhat_1',
  'openhat_2',
  'openhat_3',
  'openhat_4',
  'openhat_5',
  'openhat_6',
  'openhat_7',
  'parc_1',
  'parc_2',
  'parc_3',
  'parc_4',
  'parc_5',
  'parc_6',
  'parc_7',
  'parc_8',
  'parc_9',
  'parc_10',
  'parc_11',
  'parc_12',
  'pulse_1',
  'pulse_2',
  'pulse_3',
  'pulse_4',
  'pulse_5',
  'pulse_6',
  'pulse_7',
  'pulse_8',
  'pulse_9',
  'pulse_10',
  'sfx_1',
  'sfx_2',
  'sfx_3',
  'sfx_4',
  'snare_1',
  'snare_2',
  'snare_3',
  'snare_4',
  'snare_5',
  'snare_6',
].map(name => ({ name, path: `/assets/audio/${name}.wav`, element: null }))
export const defaultAudioNames = ['crash_1', 'hihat_2', 'snare_3', 'kick_4']
