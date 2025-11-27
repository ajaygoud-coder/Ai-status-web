
import { NextResponse } from 'next/server';

export async function POST(req){
  const body = await req.json();
  const prompt = body.prompt || "sample";

  return NextResponse.json({
    output: `AI generated content for: ${prompt}`
  })
}
