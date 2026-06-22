import { NextResponse } from "next/server";
import { registerUser } from "@/services/auth";
import type { AuthForm } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AuthForm;
    const result = await registerUser(payload);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    const msg = (error as Error).message || "Error en el servidor";
    const status = msg.includes("invalid") || msg.includes("contrase") || msg.includes("credenciales") || msg.includes("registrad") ? 400 : 500;
    return NextResponse.json({ message: msg }, { status });
  }
}
