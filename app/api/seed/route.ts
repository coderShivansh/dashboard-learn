// app/api/seed/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Your seeding logic here
    return NextResponse.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Seeding failed' }, { status: 500 });
  }
}
