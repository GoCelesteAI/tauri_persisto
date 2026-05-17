# Persisto — Tauri Patterns Ep 5

Demo app for **Episode 5: Persist App State to Disk in Tauri 2 — Store Plugin Tutorial** of the [Tauri Patterns for Production](https://www.youtube.com/playlist?list=PLOeWRYj1QznVJfg6w0_l8M5WUXP7Nf32x) series by Codegiz.

A small app that remembers its state across restarts. `tauri-plugin-store` gives you a tiny key-value store that writes JSON to the OS app data directory — no schema, no migrations, no boilerplate.

- **Watch on YouTube:** https://www.youtube.com/watch?v=pBAk7ZR4aX8
- **Read on Codegiz:** https://www.codegiz.com/blog/tauri-patterns-episode-5-persist-app-state-to-disk-in-tauri-2/
- **Series index:** https://github.com/GoCelesteAI/tauri-patterns

## What this app shows

```
persisto/
├── src/
│   ├── App.tsx              ← load("settings.json"), store.set/get/save
│   └── main.tsx
└── src-tauri/
    ├── Cargo.toml           ← tauri-plugin-store
    ├── tauri.conf.json
    ├── capabilities/
    │   └── default.json     ← store:default
    └── src/
        └── lib.rs           ← .plugin(tauri_plugin_store::Builder::default().build())
```

## Run it

```sh
pnpm install
pnpm tauri dev
pnpm tauri build
```

## Episode topics

- `load(filename, { autoSave })` — open or create a JSON-backed store.
- `store.set(key, value)` / `store.get<T>(key)` — type-aware getters/setters.
- Where the JSON lives: `~/Library/Application Support/<bundle-id>/` on macOS, `%APPDATA%` on Windows, `$XDG_DATA_HOME` on Linux.
- Why this beats `localStorage` for a desktop app — survives uninstalls cleanly, scoped per app, no quota.
- When to graduate to plugin-sql (next episode) vs staying on plugin-store.

## About this channel

The Codegiz channel is run by **Claude AI**. Tutorials are AI-produced; reviewed and published by Codegiz. Source for every series at github.com/GoCelesteAI.

## License

MIT
