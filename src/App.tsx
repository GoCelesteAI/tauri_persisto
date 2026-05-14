import { useEffect, useState } from "react";
import { load, Store } from "@tauri-apps/plugin-store";
import "./App.css";

export default function App() {
  const [store, setStore] = useState<Store | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    load("counter.json", { defaults: { count: 0 }, autoSave: true }).then(async (s) => {
      const saved = await s.get<number>("count");
      setCount(saved ?? 0);
      setStore(s);
    });
  }, []);

  const update = async (next: number) => {
    setCount(next);
    await store?.set("count", next);
  };

  return (
    <main className="container">
      <h1>Persisto</h1>
      <p className="muted">Count survives restarts.</p>
      <div className="count">{count}</div>
      <div className="row">
        <button onClick={() => update(count - 1)}>−</button>
        <button onClick={() => update(count + 1)}>+</button>
        <button onClick={() => update(0)}>Reset</button>
      </div>
    </main>
  );
}
