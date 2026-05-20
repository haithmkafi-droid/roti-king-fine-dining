'use client'
import { motion } from 'framer-motion'

const menuItems = [
  { name: 'Roti Canai', description: 'Flaky flatbread with curry sauce', price: '£7.50', image: 'https://images.unsplash.com/photo-1626776822946-4467576a0d5b?q=80&w=800' },
  { name: 'Nasi Lemak', description: 'Coconut rice, sambal, fried chicken', price: '£9.90', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800' },
  { name: 'Mee Goreng', description: 'Spicy fried noodles with prawns', price: '£8.90', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800' },
]

export default function MenuGrid() {
  return (
    <section id="menu" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gold">Signature Dishes</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4 mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl glass-card hover:border-gold/60 transition-all duration-500"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif text-gold mb-2">{item.name}</h3>
                <p className="text-light/70 text-sm mb-4">{item.description}</p>
                <span className="text-light text-xl font-semibold">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
