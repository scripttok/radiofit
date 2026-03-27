// Tipos para agendamento de anúncios

export type RepeatMode = "daily" | "once";

export interface AdSchedule {
  id: string;
  adId: string;
  adTitle: string; // desnormalizado para exibição rápida
  hour: number; // 0-23
  minute: number; // 0-59
  repeatMode: RepeatMode;
  isActive: boolean;
  createdAt: Date;
  createdBy: string;
}

// Versão serializada para o Firestore
export interface AdScheduleDocument {
  id: string;
  adId: string;
  adTitle: string;
  hour: number;
  minute: number;
  repeatMode: RepeatMode;
  isActive: boolean;
  createdAt: string; // ISO 8601
  createdBy: string;
}

// Payload para criar ou atualizar um agendamento
export interface UpsertSchedulePayload {
  adId: string;
  hour: number;
  minute: number;
  repeatMode: RepeatMode;
  isActive: boolean;
}
