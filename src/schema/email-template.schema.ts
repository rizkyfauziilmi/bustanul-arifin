import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const emailTemplateSchema = z
  .object({
    namaLengkap: z.string().min(1, 'Nama lengkap harus diisi'),
    tempatLahir: z.string().min(1, 'Tempat lahir harus diisi'),
    jenjangSekolah: z.enum(['SD', 'SMP', 'SMK'], {
      message: 'Jenjang sekolah harus dipilih',
    }),
    tanggalLahir: z.date({
      message: 'Tanggal lahir harus diisi',
    }),
    alamatLengkap: z.string().min(1, 'Alamat lengkap harus diisi'),
    jenisKelamin: z.enum(['Laki-Laki', 'Perempuan'], {
      message: 'Jenis kelamin harus dipilih',
    }),
    // TODO: validate phone number
    nomorHandphone: z
      .string()
      .min(1, 'No. HP/WA harus diisi')
      .refine(isValidPhoneNumber, {
        message: 'Nomor handphone tidak valid',
      }),
    asalSekolah: z.string().min(1, 'Asal sekolah harus diisi'),
    program: z.enum(['Reguler', 'Boarding School'], {
      message: 'Program harus dipilih',
    }),
  })
  .refine(
    (data) => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let minYear, maxYear;
      if (data.jenjangSekolah === 'SD') {
        // SD: usia 6-12 tahun
        minYear = currentYear - 12;
        maxYear = currentYear - 6;
      } else if (data.jenjangSekolah === 'SMP') {
        // SMP: usia 12-15 tahun
        minYear = currentYear - 15;
        maxYear = currentYear - 12;
      } else if (data.jenjangSekolah === 'SMK') {
        // SMK: usia 15-18 tahun
        minYear = currentYear - 18;
        maxYear = currentYear - 15;
      } else {
        // fallback, should not happen
        return false;
      }
      const birthYear = data.tanggalLahir.getFullYear();
      return birthYear >= minYear && birthYear <= maxYear;
    },
    {
      message:
        'Tanggal lahir harus sesuai dengan rentang usia yang dipilih pada jenjang sekolah',
      path: ['tanggalLahir'],
    }
  );

export type EmailTemplateSchema = z.infer<typeof emailTemplateSchema>;
