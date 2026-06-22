import { NextResponse } from "next/server";
import { loginUser } from "@/services/auth";
import type { AuthForm } from "@/types/auth";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as AuthForm;
    const result = await loginUser(payload);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const msg = (error as Error).message || "Error en el servidor";
    const status = msg.includes("Credenciales") || msg.includes("invalid") ? 400 : 500;
    return NextResponse.json({ message: msg }, { status });
  }
}
