// Tipos relacionados a anúncios

export type AdStatus = "processing" | "ready" | "error";

export interface Ad {
  id: string;
  title: string;
  originalFileName: string;
  audioUrl: string; // URL do áudio extraído (Firebase Storage)
  originalFileUrl: string; // URL do MP4 original (Firebase Storage)
  durationSeconds: number;
  status: AdStatus;
  createdAt: Date;
  createdBy: string; // uid do admin
}

// Versão serializada para o Firestore
export interface AdDocument {
  id: string;
  title: string;
  originalFileName: string;
  audioUrl: string;
  originalFileUrl: string;
  durationSeconds: number;
  status: AdStatus;
  createdAt: string; // ISO 8601
  createdBy: string;
}

// Payload para criar um novo anúncio
export interface CreateAdPayload {
  title: string;
  file: File; // MP4
}
