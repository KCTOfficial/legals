# legals
Semua dokumen legal publik milik KCT

## Struktur

```
<app>/
  <dokumen>.md   # mis. privacy-policy.md, terms-and-conditions.md
  icon.png       # opsional, ikon app di situs legal
  app.json       # opsional, { "name": "...", "description": "..." }
```

Setiap push ke `main` otomatis membangun ulang situs legal (kode situs ada di branch `docs`) dan
setiap berkas `.md` baru langsung tampil di `/apps/<app>/<dokumen>/`.
