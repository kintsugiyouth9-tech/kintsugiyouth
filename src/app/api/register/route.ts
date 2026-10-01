import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "public", "registrations.json");

function readRegistrations() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading registrations:", error);
    return [];
  }
}

interface Registration {
  id: number;
  name: string;
  email: string;
  city: string;
  interest: string;
  created_at: string;
}

function writeRegistrations(registrations: Registration[]) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2));
  } catch (error) {
    console.error("Error writing registrations:", error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, city, interest } = await request.json();

    if (!name || !email || !city || !interest) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    const registrations = readRegistrations();

    if (registrations.some((r: Registration) => r.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const newRegistration = {
      id: Date.now(),
      name,
      email,
      city,
      interest,
      created_at: new Date().toISOString(),
    };

    registrations.unshift(newRegistration);
    writeRegistrations(registrations);

    return NextResponse.json({
      message: "Registration successful!",
      registration: newRegistration,
    }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Registration failed. Please try again." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const registrations = readRegistrations();
    return NextResponse.json({ registrations, count: registrations.length });
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch registrations" }, { status: 500 });
  }
}