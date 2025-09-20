import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CalendarIcon, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import {
  emailTemplateSchema,
  type EmailTemplateSchema,
} from "@/schema/email-template.schema";
import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { generateEmailTemplate } from "@/lib/string";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { id } from "date-fns/locale";
import { useState } from "react";

// TODO: integrate dialog with react hook form
export const EmailTemplateDialog = () => {
  const [open, setOpen] = useState(false);

  const sendEmail = (subject: string, body: string, email: string) => {
    window.open(
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
  };

  const form = useForm<z.infer<typeof emailTemplateSchema>>({
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

    form.reset();
    setOpen(false);

    sendEmail(subject, body, "rizkyfauziilmi@gmail.com");
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <Mail className="w-4 h-4 mr-2" />
          Buka Template Email
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Mendaftar Sebagai Calon Siswa Baru</DialogTitle>
          <DialogDescription>
            Isi form berikut untuk membuka template email pendaftaran. Tunggu
            balasan email untuk informasi selanjutnya.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                locale: id,
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
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => {
                            const jenjang = form.watch("jenjangSekolah");

                            const now = new Date();
                            const currentYear = now.getFullYear();

                            let minYear, maxYear;

                            if (jenjang === "SMP") {
                              // SMP: usia 12-15 tahun
                              minYear = currentYear - 15;
                              maxYear = currentYear - 12;
                            } else if (jenjang === "SMK") {
                              // SMK: usia 15-18 tahun
                              minYear = currentYear - 18;
                              maxYear = currentYear - 15;
                            } else {
                              // fallback, should not happen
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
                      <Input placeholder="Rizky Fauzi Ilmi" {...field} />
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
            <Button
              type="button"
              className="w-full"
              onClick={async () => {
                await form.trigger(); // Manually triggers form or input validation
                if (form.formState.isValid) onSubmit(form.getValues()); // Call the `onSubmit` function if the form is validated
              }}
            >
              <Send />
              Kirim Email
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
