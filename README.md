# legals
Semua dokumen legal publik milik KCT

## Struktur

```
<app>/
  <dokumen>.md   # mis. privacy-policy.md, terms-and-conditions.md
  icon.png       # opsional, ikon app di situs legal
  app.json       # opsional, metadata app (lihat di bawah)
```

### `app.json`

```json
{
  "name": "AksaraGo",
  "description": "Deskripsi singkat aplikasi.",
  "tags": ["Education", "Game", "Kids"]
}
```

| Field         | Wajib | Keterangan                                                        |
| ------------- | ----- | ----------------------------------------------------------------- |
| `name`        | Ya    | Nama tampilan app. Tanpa `app.json`, nama diambil dari nama folder |
| `description` | Tidak | Deskripsi singkat, tampil di halaman app                          |
| `tags`        | Tidak | Maksimal 5 tag (masing-masing maks. 24 karakter). Tampil di halaman app dan menjadi filter di halaman All apps (`/apps/`). Lebih dari 5 membuat build situs gagal |

Setiap push ke `main` otomatis membangun ulang situs legal (kode situs ada di branch `docs`) dan
setiap berkas `.md` baru langsung tampil di `/apps/<app>/<dokumen>/`.
