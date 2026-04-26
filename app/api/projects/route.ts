import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'projects.json');

async function readProjects() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeProjects(data: any) {
  await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
}

// GET all projects
export async function GET() {
  try {
    const projects = await readProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read projects' }, { status: 500 });
  }
}

// POST create new project
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const projects = await readProjects();
    
    const newProject = {
      id: Date.now().toString(),
      ...body,
      createdAt: new Date().toISOString(),
    };
    
    projects.push(newProject);
    await writeProjects(projects);
    
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

// PUT update project
export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;
    
    const projects = await readProjects();
    const index = projects.findIndex((p: any) => p.id === id);
    
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    projects[index] = { ...projects[index], ...body, id };
    await writeProjects(projects);
    
    return NextResponse.json(projects[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

// DELETE project
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    
    const projects = await readProjects();
    const filtered = projects.filter((p: any) => p.id !== id);
    
    if (filtered.length === projects.length) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    
    await writeProjects(filtered);
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
