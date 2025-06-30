@echo off
set "NEXTAUTH_URL=http://localhost:3000"
set "NEXTAUTH_SECRET=fS97IcXEz4yF8fVRmuglqMZh+n1lJJNxOITGalzHnyQ="
set "DATABASE_URL=postgresql://postgres:JSIDjiUJdxsdjcDIuJx09a@db.xprbwqrcftroahrufsqu.supabase.co:5432/postgres"
set "EMAIL_SERVICE="
set "EMAIL_FROM="
set "EMAIL_SERVER_USER="
set "EMAIL_SERVER_PASSWORD="
set "STRIPE_SECRET_KEY="
set "NEXT_PUBLIC_VERCEL_IP_ADDRESS=76.76.21.21"
set "VERCEL_API_URL=https://api.vercel.com"
set "ADMIN_EMAIL=admin@nextacular.com"
npx prisma migrate dev --name init