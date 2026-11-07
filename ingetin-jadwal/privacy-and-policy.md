# Kebijakan Privasi Ingetin Jadwal

**Berlaku sejak:** 2026-11-04
**Kontak:** team@kct.co.id

Ingetin Jadwal adalah aplikasi Android untuk mengatur jadwal pelajaran, tugas, dan pengingat, dipakai pelajar SD sampai mahasiswa termasuk anak di bawah 13 tahun. Kebijakan ini menjelaskan data apa yang dipakai aplikasi, untuk apa, dengan siapa data itu diproses, berapa lama disimpan, dan cara menghapusnya.

## 1. Siapa kami

Ingetin Jadwal dikembangkan dan dikelola oleh PT. Kreasindo Cipta Teknologi ("kami"), yang bertindak sebagai pengendali data pribadi untuk aplikasi ini. Pertanyaan, permintaan, atau keluhan tentang privasi dapat dikirim ke team@kct.co.id.

## 2. Ringkasan

- Aplikasi bisa dipakai penuh **tanpa akun**. Tanpa akun, jadwal, tugas, dan catatanmu hanya tersimpan di HP.
- Masuk dengan Google bersifat **opsional**, hanya untuk memindahkan data ke HP lain, dan hanya tersedia untuk pengguna **13 tahun ke atas**.
- Kami **tidak menjual** data pribadi.
- Untuk pengguna di bawah 13 tahun: iklan selalu non-personal tanpa ID iklan, dan **statistik pemakaian (analitik) tidak dikumpulkan**.
- Kamu bisa menghapus akun dan semua data cloud kapan saja dari aplikasi.

## 3. Data yang tersimpan di HP

Jadwal, periode, mata pelajaran, guru, ruangan, sesi, tugas, pengingat, hari libur, kehadiran, nilai, catatan pertemuan, foto catatan, dan pengaturan disimpan di HP-mu. Tanpa masuk akun, data ini tidak pernah dikirim ke server kami.

**Tahun lahir** yang kamu isi saat pertama memakai aplikasi disimpan di HP saja. Tahun lahir hanya dipakai untuk menentukan kelompok usia (di bawah 13 tahun, atau 13 tahun ke atas) dan tidak pernah dikirim.

**Foto catatan** (misalnya foto papan tulis) disimpan di HP saja, setelah informasi lokasi dan metadata kamera (EXIF) dihapus. Foto tidak ikut tersinkron ke cloud.

## 4. Data bila kamu masuk dengan Google (opsional)

Masuk dengan Google hanya ditawarkan kepada pengguna yang tahun lahirnya menunjukkan usia 13 tahun ke atas, sehingga nama dan email akun Google tidak dikumpulkan dari anak di bawah 13 tahun. Bila kamu memilih masuk dengan akun Google:

- **Nama, alamat email, dan ID akun** dari Google dipakai untuk mengenali akunmu (Firebase Authentication).
- **Salinan data aplikasi**: jadwal, tugas, pengingat, kehadiran, nilai, teks catatan, dan data aplikasi lainnya disimpan di Cloud Firestore (Google Firebase) agar bisa dipakai di HP lain. Hanya akunmu yang bisa membaca dan mengubah data ini. Isi foto tidak ikut disimpan.
- **Kelompok usia** (di bawah 13 tahun atau tidak), bukan tahun lahir, disimpan bersama akunmu agar aturan iklan dan analitik yang sama berlaku di HP lain.

Bila kamu mengisi kontak atau catatan untuk guru di aplikasi, isian itu ikut tersinkron sebagai bagian dari datamu. Isilah hanya informasi yang memang perlu.

## 5. Analitik dan laporan crash

Setelah kelompok usia diketahui, aplikasi mengirim:

- **Statistik pemakaian** (Firebase Analytics), **khusus pengguna 13 tahun ke atas**, misalnya bahwa sebuah tugas dibuat atau tour selesai, beserta kelompok usia dan jenjang (SD, SMP, dan seterusnya). Statistik ini **tidak** berisi isi jadwal, judul tugas, nama, atau email, dan tidak memakai ID iklan. Untuk pengguna di bawah 13 tahun, Analytics dimatikan dan tidak ada statistik yang dikirim.
- **Laporan crash** (Firebase Crashlytics), untuk semua usia: jenis perangkat, versi Android, versi aplikasi, dan keterangan teknis error. Laporan ini hanya dipakai untuk memperbaiki aplikasi, tidak untuk iklan. Pesan error disaring agar tidak memuat email, nomor telepon, atau token.

Sebelum kelompok usia diketahui, tidak ada statistik atau laporan crash yang dikirim.

Seperti umumnya layanan internet, layanan Google di atas menerima **alamat IP** perangkatmu dan dapat memperkirakan **lokasi kasar** (misalnya negara atau kota) darinya. Aplikasi tidak meminta izin lokasi dan tidak pernah membaca lokasi GPS.

## 6. Iklan

Aplikasi menampilkan iklan banner dari Google AdMob di beberapa daftar (Tugas, Mata pelajaran, Guru & ruangan, dan Lainnya). Tidak ada iklan di layar Hari Ini, Jadwal, formulir, atau dialog.

- **Di bawah 13 tahun:** iklan selalu non-personal, ditandai untuk anak, dibatasi rating konten G, dan **ID iklan tidak dipakai**.
- **13 tahun ke atas:** iklan dapat dipersonalisasi sesuai persetujuanmu. Bila wilayahmu mewajibkannya (misalnya Uni Eropa), kamu akan ditanya lebih dulu, dan pilihan itu bisa diubah di Pengaturan → Pilihan privasi iklan.
- Sebelum kelompok usia diketahui, tidak ada iklan yang dimuat.
- Pengguna premium tidak melihat iklan.

Untuk menampilkan dan mengukur iklan, AdMob dapat memproses ID iklan (khusus 13 tahun ke atas), alamat IP, informasi perangkat, dan interaksi dengan iklan, sesuai kebijakan privasi Google.

## 7. Data anak

Ingetin Jadwal dirancang agar aman dipakai anak. Untuk pengguna yang tahun lahirnya menunjukkan usia di bawah 13 tahun:

- iklan non-personal dengan rating maksimal G, tanpa ID iklan;
- **statistik pemakaian (Firebase Analytics) tidak dikumpulkan**; hanya laporan crash teknis yang dikirim untuk memperbaiki aplikasi;
- aplikasi tidak meminta izin lokasi;
- **masuk dengan Google tidak tersedia**, sehingga nama dan email akun tidak dikumpulkan; semua data tetap di HP dan aplikasi bisa dipakai penuh tanpa akun;
- tidak ada fitur obrolan, profil publik, atau berbagi konten ke orang yang tidak dikenal. Berbagi jadwal lewat kode QR terjadi langsung antar-HP tanpa melalui server kami, dan tidak menyertakan kontak guru, catatan, tugas, maupun nilai.

Orang tua atau wali dapat meminta akses atau penghapusan data anak dengan menghubungi team@kct.co.id atau melalui halaman hapus akun (https://kctofficial.github.io/legals/apps/ingetin-jadwal/account-deletion).

## 8. Izin perangkat

Aplikasi hanya meminta izin saat fitur terkait dipakai. Menolak izin tidak menghalangi pemakaian fitur lain.

| Izin | Dipakai untuk | Data dikirim ke server? |
|---|---|---|
| Notifikasi | Pengingat kelas dan tugas | Tidak |
| Alarm tepat | Pengingat berbunyi tepat waktu | Tidak |
| Kamera | Memindai kode QR jadwal dan memotret papan tulis | Tidak; gambar diproses di HP |
| Kalender | Menambahkan jadwal ke kalender HP saat kamu memilih Ekspor ke kalender | Tidak; aplikasi hanya membaca daftar kalender dan acara yang dibuatnya sendiri |
| Foto | Memilih foto catatan lewat pemilih foto bawaan Android | Tidak |

## 9. Pihak yang memproses data

Kami memakai layanan Google sebagai pemroses data:

- **Google Firebase**: Authentication, Cloud Firestore, Analytics, Crashlytics, Remote Config, dan App Check (pemeriksaan bahwa permintaan berasal dari aplikasi asli).
- **Google AdMob**: iklan.
- **RevenueCat** (bila langganan premium tersedia): status langganan, terhubung dengan ID akun, tanpa data pembayaran. Pembayaran diproses oleh Google Play.

Layanan tersebut memproses data sesuai kebijakan privasi masing-masing ([Google](https://policies.google.com/privacy), [RevenueCat](https://www.revenuecat.com/privacy)). Kami tidak menjual atau menyewakan data pribadi kepada siapa pun.

## 10. Lokasi penyimpanan

Data cloud aplikasi (Firestore) disimpan di pusat data Google Cloud di Jakarta, Indonesia (`asia-southeast2`). Data analitik, laporan crash, autentikasi, dan iklan dapat diproses oleh Google di pusat data di luar Indonesia, dengan perlindungan sesuai kebijakan Google.

## 11. Dasar pemrosesan

- **Persetujuanmu**: masuk dengan Google, personalisasi iklan (13 tahun ke atas), dan izin perangkat.
- **Pelaksanaan layanan yang kamu minta**: menyimpan dan menyinkronkan data aplikasi.
- **Kepentingan yang sah**: analitik pemakaian (13 tahun ke atas) dan laporan crash untuk memperbaiki aplikasi, serta perlindungan dari penyalahgunaan.

Untuk anak di bawah 13 tahun, kami berasumsi pemakaian aplikasi berlangsung dengan sepengetahuan orang tua atau wali, dan hanya memproses data minimum seperti dijelaskan di bagian 7.

## 12. Berapa lama data disimpan

- **Data di HP**: sampai kamu menghapusnya, keluar akun dan memilih "Hapus dari HP ini", atau menghapus aplikasi.
- **Data cloud dan akun**: selama akunmu aktif. Item yang kamu hapus di aplikasi ditandai terhapus di cloud supaya ikut hilang di HP lain, dan tidak lagi ditampilkan. Salinannya baru terhapus permanen dari cloud saat akunmu dihapus.
- **Saat akun dihapus**: akun dan semua data cloud dihapus permanen saat itu juga.
- **Analitik dan laporan crash**: tidak dikaitkan dengan nama atau email, dan disimpan sesuai periode retensi layanan Firebase.

## 13. Keamanan

- Semua data yang dikirim dienkripsi saat transit (HTTPS/TLS).
- Data cloud hanya dapat diakses oleh akun pemiliknya, dijaga aturan keamanan Firestore.
- Firebase App Check membantu memastikan hanya aplikasi asli yang dapat mengakses layanan kami.
- Log aplikasi disaring agar tidak memuat email, nomor telepon, atau token.

## 14. Hak kamu

Kamu (atau orang tua/wali untuk anak) berhak:

- **mengakses dan memperbaiki** data: semua data aplikasi bisa dilihat dan diubah langsung di aplikasi;
- **menghapus** data: per item di aplikasi (item ditandai terhapus di semua HP), atau seluruh akun beserta semua data cloud lewat Lainnya → Akun → Hapus akun;
- **menarik persetujuan**: keluar akun kapan saja, mengubah pilihan privasi iklan di Pengaturan, atau mencabut izin di pengaturan Android;
- **mengajukan pertanyaan atau keluhan** ke team@kct.co.id. Kami menanggapi paling lama 30 hari.

## 15. Menghapus data

- **Data di HP**: hapus aplikasi, atau keluar akun dan pilih "Hapus dari HP ini".
- **Akun dan semua data cloud**: di aplikasi buka **Lainnya → Akun → Hapus akun**, ketik HAPUS, lalu konfirmasi. Penghapusan langsung dan permanen.
- **Tanpa aplikasi**: ikuti petunjuk di https://kctofficial.github.io/legals/apps/ingetin-jadwal/account-deletion. Permintaan diproses paling lama 30 hari.

## 16. Perubahan kebijakan

Bila kebijakan ini berubah secara penting, kami akan memberi tahu di aplikasi sebelum perubahan berlaku. Tanggal "Berlaku sejak" di atas selalu menunjukkan versi terbaru.
