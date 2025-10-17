// frontend/app/today/page.tsx
"use client";
import { useEffect, useState } from "react";
import { api } from "@/lib/api";

type PlanItem = { title: string; start: string; end: string; };
type Plan = { date: string; items: PlanItem[] };

export default function TodayPage() {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const today = new Date().toISOString().slice(0, 10);
    const data = await api<Plan>(`/plan/generate`, {
      method: "POST",
      body: JSON.stringify({ date_str: today }),
    });
    setPlan(data);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Today</h1>
      <button
        onClick={load}
        className="rounded-lg bg-black text-white px-3 py-2 text-sm"
        disabled={loading}
      >
        {loading ? "Generating..." : "Regenerate plan"}
      </button>

      {!plan && <p className="text-sm text-gray-600">No plan yet.</p>}

      {plan && (
        <div className="grid gap-3">
          {plan.items.map((it, i) => (
            <div key={i} className="rounded-xl bg-white p-4 shadow-sm border">
              <div className="text-sm text-gray-500">{it.start}–{it.end}</div>
              <div className="font-medium">{it.title}</div>
              <div className="mt-2">
                <label className="inline-flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4" />
                  Mark done (hook up later)
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
