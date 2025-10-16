# kala-ai-study-planner
KALA — AI Study Planner

KALA helps you turn classes, assignments, and exams into an **adaptive daily plan** that rebalances automatically when life happens.

**Tagline:** Plan smarter. Study calmer. With KALA.

## Tech Stack
- Frontend: Next.js (TypeScript), Tailwind
- Backend: FastAPI (Python)
- DB: PostgreSQL (SQLModel)
- Planning: heuristics → OR-Tools (later)
- Deploy: Azure (later)

## Backend Quick Start
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
