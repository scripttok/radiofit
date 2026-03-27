// Tipos de usuário e autenticação

export type UserRole = "admin" | "listener";

export interface AppUser {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string;
}

// Sessão do lado do cliente (sem dados sensíveis)
export interface UserSession {
  uid: string;
  email: string;
  role: UserRole;
  displayName?: string;
  idToken: string;
}

// Credenciais de login
export interface LoginCredentials {
  email: string;
  password: string;
}
