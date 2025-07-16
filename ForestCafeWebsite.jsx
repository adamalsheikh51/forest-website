import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ForestCafeWebsite() {
  return (
    <main className="bg-[#eef3e5] text-[#2e2e2e] font-sans min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/forest-hero.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg relative z-10"
        >
          Forest Botanical Coffee House
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg md:text-2xl mb-6 max-w-xl drop-shadow relative z-10"
        >
          A calming jungle of matcha, coffee, and handmade creations.
        </motion.p>
        <Button className="bg-white text-green-900 font-bold px-6 py-3 rounded-full shadow hover:bg-green-100 transition relative z-10">
          View Menu
        </Button>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-6 bg-[#dfeede] text-center relative">
        <img src="/leaf-corner-left.png" className="absolute top-0 left-0 w-32 opacity-60" />
        <img src="/leaf-corner-right.png" className="absolute top-0 right-0 w-32 opacity-60" />
        <h2 className="text-3xl font-bold mb-8">Our Signature Drinks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <Card key={num} className="overflow-hidden shadow-md bg-[#f4f9f1]">
              <img src={`https://source.unsplash.com/400x400/?matcha,coffee,drink,${num}`} alt="drink" className="w-full h-64 object-cover" />
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">Forest Drink {num}</h3>
                <p className="text-sm mt-2">Botanical blend of bold & refreshing flavors.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Merch Section */}
      <section className="py-20 px-6 bg-[#f5f7f2] text-center relative">
        <img src="/leaf-divider.png" className="absolute top-0 left-1/2 -translate-x-1/2 w-48 opacity-70" />
        <h2 className="text-3xl font-bold mb-8">Forest Merchandise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["hoodie", "mug", "candle"].map((item, i) => (
            <Card key={item} className="overflow-hidden shadow-md bg-white">
              <img src={`https://source.unsplash.com/400x400/?${item},natural,product&sig=${i}`} alt={item} className="w-full h-64 object-cover" />
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">Forest {item.charAt(0).toUpperCase() + item.slice(1)}</h3>
                <p className="text-sm mt-2">Nature-inspired, high quality & uniquely crafted.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact / Footer */}
      <footer className="bg-[#2e2e2e] text-white py-16 px-6 text-center relative">
        <img src="/leaf-footer.png" className="absolute top-0 left-1/2 -translate-x-1/2 w-48 opacity-50" />
        <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
        <p>Bneid Al Gar, Kuwait</p>
        <p className="mt-2">Follow us on Instagram <a href="https://instagram.com/forest.bch" className="underline">@forest.bch</a></p>
      </footer>
    </main>
  );
}
