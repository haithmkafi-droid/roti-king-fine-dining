'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  date: z.string().min(1, 'Select date'),
  guests: z.string().min(1, 'Number of guests'),
})

type FormData = z.infer<typeof schema>

export default function ReservationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    alert('Reservation request sent! We will confirm shortly.')
    reset()
  }

  return (
    <section id="reservation" className="py-24 bg-gradient-to-b from-dark to-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-serif text-gold text-center mb-8">Reserve a Table</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input {...register('name')} placeholder="Full Name" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-light focus:outline-none focus:border-gold" />
              <input {...register('email')} placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-light focus:border-gold" />
              <input {...register('date')} type="date" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-light focus:border-gold" />
              <select {...register('guests')} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-light focus:border-gold">
                <option value="">Guests</option>
                {[2,4,6,8,10].map(n => <option key={n}>{n} guests</option>)}
              </select>
            </div>
            <button type="submit" className="w-full bg-gold text-dark font-semibold py-4 rounded-lg hover:bg-gold-light transition-all duration-300">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
