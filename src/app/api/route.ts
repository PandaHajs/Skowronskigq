import { NextResponse } from "next/server";
const names: string[] = [
  "An IT Student",
  "Kac Biznesu",
  "Just some random guy",
  "The perfect victim",
  "A beloved boyfriend",
  "A guy who has no idea what he's doing",
  "All hands to battle stations!",
  "General Kenobi",
  "Lvl 9 wizard",
];

export async function GET() {
  return NextResponse.json({
    splash: names,
  });
}
