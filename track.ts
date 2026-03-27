// Tipos relacionados a faixas musicais do Spotify

export interface Track {
  id: string;
  spotifyId: string;
  name: string;
  artist: string;
  album: string;
  albumCoverUrl: string;
  durationMs: number;
  playedAt: Date;
}

// Versão serializada para o Firestore (datas como string ISO)
export interface TrackDocument {
  id: string;
  spotifyId: string;
  name: string;
  artist: string;
  album: string;
  albumCoverUrl: string;
  durationMs: number;
  playedAt: string; // ISO 8601
}

export interface CurrentTrack {
  spotifyId: string;
  name: string;
  artist: string;
  album: string;
  albumCoverUrl: string;
  durationMs: number;
  progressMs: number;
  isPlaying: boolean;
}
