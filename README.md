# NanoMeds starter

Next.js + PostgreSQL + Prisma ORM 7 + @prisma/adapter-pg + Tailwind CSS 4 + daisyUI + Embla Carousel + Lucide + React Icons.

## 1. Requirements

- Node.js 22.18+ recommended for current Prisma 7 tooling
- PostgreSQL running locally or a hosted PostgreSQL database
- npm

## 2. Install

```bash
npm install
```

## 3. Environment

Copy `.env.example` to `.env` and update `DATABASE_URL`.

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Example:

```env
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/nanomeds?schema=public"
```

Create a PostgreSQL database named `nanomeds` before migrating.

## 4. Generate Prisma and create tables

```bash
npx prisma generate
npx prisma migrate dev --name init
npm run db:seed
```

Prisma 7 runtime uses `@prisma/adapter-pg` in `lib/prisma.ts`.

## 5. Run

```bash
npm run dev
```

Open http://localhost:3000

## Important

The starter contains clearly marked demo medicine content. Replace it with NanoMeds' reviewed/approved product information before publishing, especially dosage, contraindications, interactions, warnings, benefits, indications and side effects.
# AdvanceNanoMeds
