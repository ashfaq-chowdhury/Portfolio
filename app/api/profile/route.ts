import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'profile.json');

async function readProfile() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return {};
  }
}

async function writeProfile(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

// GET profile
export async function GET() {
  try {
    const profile = await readProfile();
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read profile' }, { status: 500 });
  }
}

// PUT update profile
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const profile = await readProfile();
    
    const updatedProfile = { ...profile, ...body };
    await writeProfile(updatedProfile);
    
    return NextResponse.json(updatedProfile);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
