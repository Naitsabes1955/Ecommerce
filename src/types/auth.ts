export type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export type AuthForm = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type AuthError = {
  message: string;
};
