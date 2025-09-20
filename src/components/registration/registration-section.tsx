"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  MessageCircle,
  Mail,
  ExternalLink,
  Phone,
  Clock,
  Users,
} from "lucide-react";
import type { ReactNode } from "react";
import Facebook from "../svgs/facebook";
import Instagram from "../svgs/instagram";
import YouTube from "../svgs/youtube";
import WhatsApp from "../svgs/whatsapp";
import { EmailTemplateDialog } from "../dialogs/email-template-dialog";

type VisitContent = {
  address: string;
  mapLink: string;
};

type SocialContent = {
  socials: {
    name: string;
    handle: string;
    icon: ReactNode;
    link: string;
  }[];
};

type RegistrationMethod =
  | {
      id: "visit";
      title: string;
      description: string;
      icon: ReactNode;
      color: string;
      content: VisitContent;
    }
  | {
      id: "social";
      title: string;
      description: string;
      icon: ReactNode;
      color: string;
      content: SocialContent;
    }
  | {
      id: "email";
      title: string;
      description: string;
      icon: ReactNode;
      color: string;
    };

const registrationMethods: RegistrationMethod[] = [
  {
    id: "visit",
    title: "Datang Langsung",
    description:
      "Kunjungi langsung sekolah kami untuk mendapatkan informasi lengkap dan melakukan pendaftaran",
    icon: <MapPin className="w-6 h-6" />,
    color: "bg-blue-500",
    content: {
      address:
        "Jl. Sindangkerta - Gunung Halu, KP. Sukamanah RT 01 RW 03, Desa Cicangkanggirang, Kec. Sindangkerta, Kabupaten Bandung Barat.",
      mapLink: "https://maps.app.goo.gl/AuxLd1oGAXUeqPeA8",
    },
  },
  {
    id: "social",
    title: "Melalui Media Sosial",
    description:
      "Hubungi kami melalui berbagai platform media sosial resmi sekolah",
    icon: <Users className="w-6 h-6" />,
    color: "bg-green-500",
    content: {
      socials: [
        {
          name: "Facebook",
          handle: "smkitbustanularifin",
          icon: <Facebook className="w-5 h-5" />,
          link: "https://facebook.com/smkitbustanularifin",
        },
        {
          name: "Instagram",
          handle: "@tahfidzbustanularifin",
          icon: <Instagram className="w-5 h-5" />,
          link: "https://instagram.com/tahfidzbustanularifin",
        },
        {
          name: "YouTube",
          handle: "smkitbustanularifin",
          icon: <YouTube className="w-5 h-5" />,
          link: "https://youtube.com/@smkitbustanularifin",
        },
        {
          name: "WhatsApp",
          handle: "0857-7719-8308",
          icon: <WhatsApp className="w-5 h-5" />,
          link: "https://wa.me/6285777198308",
        },
      ],
    },
  },
  {
    id: "email",
    title: "Form Pendaftaran via Email",
    description:
      "Kirim form pendaftaran melalui email dengan format yang telah ditentukan",
    icon: <Mail className="w-6 h-6" />,
    color: "bg-purple-500",
  },
];

export default function RegistrationSection() {
  return (
    <section id="registration">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
          Pendaftaran Siswa Baru
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          Bergabunglah dengan SMK IT Bustanul Arifin dan wujudkan impian
          pendidikan yang berkualitas. Pilih salah satu cara pendaftaran yang
          paling mudah untuk Anda.
        </p>
        <div className="mt-6">
          <Badge variant="secondary" className="text-lg px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Pendaftaran PPDB 2025/2026 Dibuka
          </Badge>
        </div>
      </div>

      {/* Registration Methods */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {registrationMethods.map((method, index) => (
          <Card
            key={method.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border"
          >
            <CardHeader className="flex items-center gap-4">
              <div
                className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center text-white`}
              >
                {method.icon}
              </div>
              <div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {method.title}
                  </h3>
                  <Badge variant="outline" className="mt-1">
                    Metode {index + 1}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {method.description}
              </p>

              {/* Content based on method type */}
              {method.id === "visit" && (
                <div className="space-y-4">
                  <div className="rounded-md overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0950587820776!2d107.38293021024315!3d-6.998086192973882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68f187dd0bec01%3A0x60e134eb6a4fc622!2sPONDOK%20PESANTREN%20TAHFIZH%20BUSTANUL%20ARIFIN!5e0!3m2!1sid!2sid!4v1758379690361!5m2!1sid!2sid"
                      style={{
                        border: 0,
                      }}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() =>
                      window.open(method.content.mapLink, "_blank")
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Buka di Google Maps
                  </Button>
                </div>
              )}

              {method.id === "social" && (
                <div className="space-y-3">
                  {method.content.socials.map((social, idx) => (
                    <div
                      key={idx}
                      className="flex cursor-pointer items-center hover:scale-105 transition-all justify-between p-3 bg-muted rounded-lg hover:bg-muted/80"
                      onClick={() => window.open(social.link, "_blank")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                          {social.icon}
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">
                            {social.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {social.handle}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {method.id === "email" && <EmailTemplateDialog />}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-muted/50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          Butuh Bantuan Lebih Lanjut?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
          Tim kami siap membantu Anda dalam proses pendaftaran. Jangan ragu
          untuk menghubungi kami melalui salah satu cara di atas atau datang
          langsung ke sekolah.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Phone className="w-4 h-4 mr-2" />
            Hubungi Sekarang
          </Button>
          <Button size="lg" variant="outline">
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
