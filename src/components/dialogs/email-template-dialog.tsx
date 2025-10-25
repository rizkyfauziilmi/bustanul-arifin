import { CalendarIcon, Inbox, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { id as idLocale } from "date-fns/locale";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  emailTemplateSchema,
  type EmailTemplateSchema,
} from "@/schema/email-template.schema";
import { generateEmailTemplate } from "@/lib/string";
import { PhoneInput } from "../phone-input";

export const EmailTemplateDialog = () => {
  const [open, setOpen] = useState(false);

  const sendEmail = (subject: string, body: string, email: string) => {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  };

  const form = useForm<EmailTemplateSchema>({
    resolver: zodResolver(emailTemplateSchema),
    defaultValues: {
      namaLengkap: "",
      tempatLahir: "",
      tanggalLahir: undefined,
      jenjangSekolah: undefined,
      nomorHandphone: "",
      asalSekolah: "",
      program: undefined,
      alamatLengkap: "",
      jenisKelamin: undefined,
    },
  });

  function onSubmit(values: EmailTemplateSchema) {
    const { subject, body } = generateEmailTemplate(values);

    // form.reset();
    // setOpen(false);

    sendEmail(subject, body, "rizkyfauziilmi@gmail.com");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Inbox />
          Buka Template Email
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Data Calon Siswa Baru</DialogTitle>
              <DialogDescription>
                Isi form berikut untuk mengirim email pendaftaran calon siswa
                baru.
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="namaLengkap"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input placeholder="Rizky Fauzi Ilmi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jenisKelamin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Jenis Kelamin" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {emailTemplateSchema.shape.jenisKelamin.options.map(
                          (option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="asalSekolah"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asal Sekolah</FormLabel>
                    <FormControl>
                      <Input placeholder="SMP Hikmah Teladan" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jenjangSekolah"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenjang Sekolah</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Jenjang Sekolah" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {emailTemplateSchema.shape.jenjangSekolah.options.map(
                          (option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tempatLahir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tempat Lahir</FormLabel>
                    <FormControl>
                      <Input placeholder="Bandung" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tanggalLahir"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Tanggal Lahir</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            disabled={form.watch("jenjangSekolah") == null}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground",
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", {
                                locale: idLocale,
                              })
                            ) : (
                              <span>Pilih Tanggal Lahir</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          defaultMonth={(() => {
                            const jenjang = form.watch("jenjangSekolah");
                            const now = new Date();
                            const currentYear = now.getFullYear();
                            if (jenjang === "SD") {
                              // SD: usia 6-12 tahun, default to 9 years ago
                              return new Date(currentYear - 9, 0);
                            } else if (jenjang === "SMP") {
                              // SMP: usia 12-15 tahun, default to 13 years ago
                              return new Date(currentYear - 13, 0);
                            } else if (jenjang === "SMK") {
                              // SMK: usia 15-18 tahun, default to 16 years ago
                              return new Date(currentYear - 16, 0);
                            }
                            // fallback default
                            return new Date(2006, 0);
                          })()}
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => {
                            const jenjang = form.watch("jenjangSekolah");
                            const now = new Date();
                            const currentYear = now.getFullYear();
                            let minYear, maxYear;
                            if (jenjang === "SD") {
                              minYear = currentYear - 12;
                              maxYear = currentYear - 6;
                            } else if (jenjang === "SMP") {
                              minYear = currentYear - 15;
                              maxYear = currentYear - 12;
                            } else if (jenjang === "SMK") {
                              minYear = currentYear - 18;
                              maxYear = currentYear - 15;
                            } else {
                              return false;
                            }
                            const birthYear = date.getFullYear();
                            return birthYear < minYear || birthYear > maxYear;
                          }}
                          captionLayout="dropdown"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="nomorHandphone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Handphone</FormLabel>
                    <FormControl>
                      <PhoneInput
                        placeholder="Masukkan Nomor Handphone"
                        international={false}
                        defaultCountry="ID"
                        allowedCountries={["ID"]}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="program"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Program yang Diminati</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl className="w-full">
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih Program" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {emailTemplateSchema.shape.program.options.map(
                          (option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="alamatLengkap"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Alamat Lengkap</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Jl. Contoh No. 123, Kecamatan, Kota"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Tutup
                </Button>
              </DialogClose>
              <Button type="submit" className="flex-1">
                <Send className="mr-2 h-4 w-4" />
                Kirim Email
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
