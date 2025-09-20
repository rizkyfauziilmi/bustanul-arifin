import type { EmailTemplateSchema } from "@/schema/email-template.schema";

export function generateEmailTemplate(data: EmailTemplateSchema) {
  const {
    namaLengkap,
    asalSekolah,
    nomorHandphone: handphone,
    program,
    alamatLengkap,
    jenisKelamin,
    tanggalLahir,
    tempatLahir,
    jenjangSekolah,
  } = data;

  const now = new Date();
  const currentYear = now.getFullYear();
  const nextYear = currentYear + 1;

  return {
    subject: `Pendaftaran PPDB ${currentYear}/${nextYear} – [${namaLengkap}]`,
    body: `Assalamu'alaikum Wr. Wb.

Dengan hormat,
Saya bermaksud mendaftarkan diri sebagai calon siswa ${jenjangSekolah} di Ponpes Bustanul Arifin untuk tahun ajaran 2025/2026.

Data Calon Siswa:
- Nama Lengkap: ${namaLengkap}
- Tempat, Tanggal Lahir: ${tempatLahir}, ${tanggalLahir.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" })}
- Jenis Kelamin: ${jenisKelamin}
- Alamat Lengkap: ${alamatLengkap}
- No. HP/WA: ${handphone}
- Asal Sekolah: ${asalSekolah}
- Program yang Diminati: ${program}

Mohon informasi lebih lanjut mengenai:
1. Persyaratan pendaftaran
2. Tatacara pendaftaran
3. Jadwal pendaftaran

Demikian surat ini saya sampaikan. Atas perhatian dan informasinya, saya ucapkan terima kasih.

Wassalamu'alaikum Wr. Wb.

Hormat saya,
${namaLengkap}
`,
  };
}
