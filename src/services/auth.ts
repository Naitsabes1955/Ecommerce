import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDb from "@/lib/db";
import User from "@/database/models/User";
import type { AuthForm, AuthResponse } from "@/types/auth";

const jwtSecret = process.env.JWT_SECRET ?? "";

if (!jwtSecret) {
  console.warn("JWT_SECRET is not set. Tokens will be signed with an insecure default for development.");
}

// In-memory fallback store for development when MONGO_URI is not provided
type StoredUser = { id: string; name: string; email: string; password: string };
const inMemoryUsers = new Map<string, StoredUser>();

const useDb = !!process.env.MONGO_URI;

const signToken = (payload: object) => jwt.sign(payload, jwtSecret || "dev_secret_change_me", { expiresIn: "7d" });

export const registerUser = async (data: AuthForm): Promise<AuthResponse> => {
  if (useDb) {
    await connectDb();

    const existingUser = await User.findOne({ email: data.email.toLowerCase().trim() });
    if (existingUser) {
      throw new Error("El email ya está registrado");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await User.create({
      name: data.name?.trim() ?? "",
      email: data.email.toLowerCase().trim(),
      password: hashedPassword,
    });

    const token = signToken({ sub: user._id, email: user.email });

    return {
      token,
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
      },
    };
  }

  // Fallback: in-memory user store (development only)
  const email = data.email.toLowerCase().trim();
  if (inMemoryUsers.has(email)) {
    throw new Error("El email ya está registrado");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const id = String(Date.now()) + Math.random().toString(36).slice(2, 8);
  const user: StoredUser = { id, name: data.name?.trim() ?? "", email, password: hashedPassword };
  inMemoryUsers.set(email, user);

  const token = signToken({ sub: id, email });

  return {
    token,
    user: { id, name: user.name, email: user.email },
  };
};

export const loginUser = async (data: AuthForm): Promise<AuthResponse> => {
  if (useDb) {
    await connectDb();

    const user = await User.findOne({ email: data.email.toLowerCase().trim() });
    if (!user) {
      throw new Error("Credenciales inválidas");
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) {
      throw new Error("Credenciales inválidas");
    }

    const token = signToken({ sub: user._id, email: user.email });

    return {
      token,
      user: { id: user._id.toString(), name: user.name, email: user.email },
    };
  }

  // Fallback: in-memory lookup
  const email = data.email.toLowerCase().trim();
  const user = inMemoryUsers.get(email);
  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) {
    throw new Error("Credenciales inválidas");
  }

  const token = signToken({ sub: user.id, email: user.email });
  return { token, user: { id: user.id, name: user.name, email: user.email } };
};
