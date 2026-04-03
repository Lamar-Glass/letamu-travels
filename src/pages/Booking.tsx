import { useState } from "react";
import { toast } from "sonner";
import { destinations } from "@/data/destinations";

const Booking = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", whatsapp: "",
    destination: "", date: "", travellers: "", budget: "", requests: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    const msg = `Hello Letamu Travels! I'd like to book a trip.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDestination: ${form.destination}\nDate: ${form.date}\nTravellers: ${form.travellers}\nBudget: ${form.budget}\nRequests: ${form.requests}`;
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <>
      <section className="bg-navy py-20">
        <div className="container-custom text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-2">Book Your Trip</p>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mb-4">Enquire Now</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Fill in the form below and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { label: "Full Name *", name: "name", type: "text" },
              { label: "Email Address *", name: "email", type: "email" },
              { label: "Phone Number *", name: "phone", type: "tel" },
              { label: "WhatsApp Number", name: "whatsapp", type: "tel" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-sm font-medium mb-1">{f.label}</label>
                <input
                  type={f.type}
                  name={f.name}
                  value={form[f.name as keyof typeof form]}
                  onChange={handleChange}
                  className="w-full border rounded-md px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-gold focus:border-transparent outline-none"
                  maxLength={100}
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium mb-1">Destination</label>
              <select name="destination" value={form.destination} onChange={handleChange} className="w-full border rounded-md px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-gold outline-none">
                <option value="">Select destination</option>
                {destinations.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Travel Date</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border rounded-md px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-gold outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Number of Travellers</label>
                <input type="number" name="travellers" min="1" max="50" value={form.travellers} onChange={handleChange} className="w-full border rounded-md px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-gold outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Budget (KES)</label>
              <select name="budget" value={form.budget} onChange={handleChange} className="w-full border rounded-md px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-gold outline-none">
                <option value="">Select budget range</option>
                <option value="Under 20,000">Under 20,000</option>
                <option value="20,000 - 50,000">20,000 – 50,000</option>
                <option value="50,000 - 100,000">50,000 – 100,000</option>
                <option value="100,000+">100,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Special Requests</label>
              <textarea name="requests" value={form.requests} onChange={handleChange} rows={4} maxLength={500} className="w-full border rounded-md px-4 py-2.5 text-sm bg-background focus:ring-2 focus:ring-gold outline-none resize-none" />
            </div>

            <button type="submit" className="w-full bg-gold text-accent-foreground py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors">
              Submit Enquiry via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
