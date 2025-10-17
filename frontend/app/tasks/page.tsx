// frontend/app/tasks/page.tsx
"use client";
import { useState } from "react";

export default function TasksPage() {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [est, setEst] = useState(60);

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Tasks</h1>
      <form
        onSubmit={(e) => { e.preventDefault(); alert("Hook backend later"); }}
        className="grid gap-3 max-w-md bg-white p-4 border rounded-xl"
      >
        <input
          className="border rounded-lg px-3 py-2"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border rounded-lg px-3 py-2"
          type="date"
          value={due}
          onChange={(e) => setDue(e.target.value)}
        />
        <input
          className="border rounded-lg px-3 py-2"
          type="number"
          min={15}
          step={15}
          value={est}
          onChange={(e) => setEst(parseInt(e.target.value))}
        />
        <button className="rounded-lg bg-black text-white px-3 py-2 text-sm">
          Add task
        </button>
      </form>

      <p className="text-sm text-gray-600">
        We’ll wire this to the backend after we add Tasks CRUD.
      </p>
    </div>
  );
}
