"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building,
  Home,
  Wrench,
  Waves,
  MSquare as Mosque,
  Trophy,
} from "lucide-react";

interface Facility {
  id: string;
  name: string;
  description: string;
  category: "living" | "learning" | "recreation" | "spiritual";
  icon: React.ReactNode;
  image: string;
}

const facilities: Facility[] = [
  {
    id: "asrama",
    name: "Asrama",
    description:
      "Fasilitas hunian yang nyaman dan aman untuk para santri dengan pengawasan 24 jam dan lingkungan Islami yang mendukung pembelajaran.",
    category: "living",
    icon: <Home className="w-6 h-6" />,
    image: "/modern-islamic-dormitory-building-with-students.jpg",
  },
  {
    id: "lahan-praktek",
    name: "Lahan Praktek Pertanian",
    description:
      "Area praktik pengolahan hasil pertanian yang dilengkapi dengan peralatan modern untuk pembelajaran agribisnis dan teknologi pertanian.",
    category: "learning",
    icon: <Building className="w-6 h-6" />,
    image: "/agricultural-practice-field-with-greenhouse-and-fa.jpg",
  },
  {
    id: "workshop",
    name: "Gedung Workshop",
    description:
      "Balai latihan kerja yang dilengkapi dengan peralatan teknologi terkini untuk praktik programming, robotika, dan keterampilan IT lainnya.",
    category: "learning",
    icon: <Wrench className="w-6 h-6" />,
    image: "/modern-it-workshop-with-computers-and-technology-e.jpg",
  },
  {
    id: "kolam-renang",
    name: "Kolam Renang",
    description:
      "Fasilitas olahraga air yang bersih dan terawat untuk mendukung kesehatan jasmani dan kegiatan ekstrakurikuler renang.",
    category: "recreation",
    icon: <Waves className="w-6 h-6" />,
    image: "/clean-swimming-pool-at-islamic-school-with-modern-.jpg",
  },
  {
    id: "masjid",
    name: "Masjid",
    description:
      "Tempat ibadah yang megah dan nyaman untuk shalat berjamaah, kajian keislaman, dan kegiatan spiritual lainnya.",
    category: "spiritual",
    icon: <Mosque className="w-6 h-6" />,
    image: "/beautiful-modern-mosque-with-islamic-architecture-.jpg",
  },
  {
    id: "lapangan-futsal",
    name: "Lapangan Futsal",
    description:
      "Lapangan futsal berkualitas tinggi dengan rumput sintetis untuk mendukung kegiatan olahraga dan turnamen antar kelas.",
    category: "recreation",
    icon: <Trophy className="w-6 h-6" />,
    image: "/modern-futsal-court-with-synthetic-grass-and-goal-.jpg",
  },
];

const categories = [
  { id: "all", name: "Semua Fasilitas", color: "bg-primary" },
  { id: "living", name: "Hunian", color: "bg-blue-500" },
  { id: "learning", name: "Pembelajaran", color: "bg-green-500" },
  { id: "recreation", name: "Rekreasi", color: "bg-orange-500" },
  { id: "spiritual", name: "Spiritual", color: "bg-purple-500" },
];

export default function FacilitiesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFacilities =
    activeCategory === "all"
      ? facilities
      : facilities.filter((facility) => facility.category === activeCategory);

  return (
    <section id="facilities">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
          Fasilitas Bustanul Arifin
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          Sekolah IT Islam Terpadu yang menyediakan fasilitas lengkap dan modern
          untuk mendukung pembelajaran holistik, pengembangan karakter Islami,
          dan keterampilan teknologi masa depan.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="transition-all duration-300 hover:scale-105"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredFacilities.map((facility) => (
          <Card
            key={facility.id}
            className="group hover:shadow-xl pt-0 overflow-hidden transition-all duration-300 hover:-translate-y-2 border-border bg-card"
          >
            <CardHeader className="relative p-0">
              <>
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-accent text-accent-foreground flex items-center gap-2"
                  >
                    {facility.icon}
                    {
                      categories.find((cat) => cat.id === facility.category)
                        ?.name
                    }
                  </Badge>
                </div>
              </>
            </CardHeader>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                {facility.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                {facility.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
