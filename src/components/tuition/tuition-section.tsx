import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BadgeCheck, Wallet } from "lucide-react";

type Tuition = {
  title: string;
  description: string;
  prices: { label: string; amount: number; key?: string }[];
};

const tuitions: Tuition[] = [
  {
    title: "Biaya Pendidikan SMP (Gratis)",
    description:
      "Seluruh biaya pendidikan SMP berikut GRATIS: SPP dan Uang Gedung, dll.",
    prices: [
      { label: "SPP dan Uang Gedung", amount: 0 },
      { label: "Seragam", amount: 0 },
      { label: "Ujian Kompetensi Kejuruan", amount: 0 },
      { label: "Makan dan Minum Santri", amount: 50000 },
    ],
  },
  {
    title: "Biaya Pendidikan SMK (Gratis)",
    description:
      "Seluruh biaya pendidikan SMK berikut GRATIS: SPP dan Uang Gedung, Seragam, Ujian Kompetensi Kejuruan, dll.",
    prices: [
      { label: "SPP dan Uang Gedung", amount: 0 },
      { label: "Seragam", amount: 0 },
      { label: "Ujian Kompetensi Kejuruan", amount: 0 },
      { label: "Pelatihan BLK Pengolahan Hasil Pertanian", amount: 0 },
      { label: "Makan dan Minum Santri", amount: 50000 },
    ],
  },
  {
    title: "Biaya Pendaftaran",
    description:
      "Biaya pendaftaran berkisar antara Rp 100.000 hingga Rp 200.000, tergantung pada gelombang pendaftaran yang dipilih.",
    prices: [
      { label: "Gelombang I", amount: 100000, key: "pendaftaran" },
      { label: "Gelombang II", amount: 200000, key: "pendaftaran" },
    ],
  },
];

export const TuitionSection = () => {
  // Helper to calculate total using only the smallest price for each key, and all prices without a key
  function getTotal(prices: Tuition["prices"]) {
    const priceMap = new Map<string, number>();
    let total = 0;

    for (const price of prices) {
      if (price.key) {
        if (
          !priceMap.has(price.key) ||
          price.amount < priceMap.get(price.key)!
        ) {
          priceMap.set(price.key, price.amount);
        }
      } else {
        total += price.amount;
      }
    }

    for (const amount of priceMap.values()) {
      total += amount;
    }
    return total;
  }

  // Helper to check if all prices have the same non-undefined key
  function isAllSameKey(prices: Tuition["prices"]) {
    if (prices.length === 0) return false;
    const firstKey = prices[0].key;
    if (!firstKey) return false;
    return prices.every((p) => p.key === firstKey);
  }

  // Helper to get min and max amount in prices
  function getRange(prices: Tuition["prices"]) {
    const amounts = prices.map((p) => p.amount);
    const min = Math.min(...amounts);
    const max = Math.max(...amounts);
    return { min, max };
  }

  return (
    <section id="tuition">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Biaya Pendidikan
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
            obcaecati earum facere. Ipsum temporibus repudiandae quos veniam,
            quaerat exercitationem consectetur rem sed.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {tuitions.map((tuition) => {
            const allSameKey = isAllSameKey(tuition.prices);
            return (
              <Card key={tuition.title}>
                <CardHeader>
                  <CardTitle>{tuition.title}</CardTitle>
                  <CardDescription>{tuition.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 mb-auto">
                  {tuition.prices.map((price) => (
                    <div
                      key={price.label}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <BadgeCheck className="h-4 w-4" />
                        {price.label}
                      </div>
                      <div className="text-lg font-semibold">
                        {price.amount <= 0 ? (
                          <div className="flex items-center gap-2 text-primary">
                            <Wallet />
                            Gratis
                          </div>
                        ) : (
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(price.amount)
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t">
                  <div className="text-lg font-semibold">Total</div>
                  <div className="text-lg font-semibold">
                    {allSameKey
                      ? (() => {
                          const { min, max } = getRange(tuition.prices);
                          return min === max ? (
                            min <= 0 ? (
                              <div className="flex items-center gap-2 text-primary">
                                <Wallet />
                                Gratis
                              </div>
                            ) : (
                              new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(min)
                            )
                          ) : (
                            `${new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(min)} - ${new Intl.NumberFormat("id-ID", {
                              style: "currency",
                              currency: "IDR",
                              minimumFractionDigits: 0,
                            }).format(max)}`
                          );
                        })()
                      : new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(getTotal(tuition.prices))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
