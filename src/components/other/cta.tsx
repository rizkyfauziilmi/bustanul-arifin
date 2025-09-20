import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <div className="text-center">
      <div className="bg-muted rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          Tertarik Bergabung dengan Bustanul Arifin?
        </h3>
        <p className="text-muted-foreground mb-6 text-pretty">
          Dapatkan informasi lengkap tentang program pendidikan, fasilitas, dan
          proses pendaftaran di Sekolah IT Islam Terpadu Bustanul Arifin.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Pelajari Lebih Lanjut
          </Button>
          <Button size="lg" variant="outline">
            Hubungi Kami
          </Button>
        </div>
      </div>
    </div>
  );
};
