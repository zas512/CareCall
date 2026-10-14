import { CallStatus, PatientCard } from "@/components/ui/patient-card";

export default function CareCallDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-amber-400/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold tracking-tighter bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">CareCall</h1>
          <span className="text-xs font-medium uppercase tracking-widest text-zinc-500">Medicare RPM • Daily Check-ins</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 space-y-12">
        {/* Hero metric */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400/10 to-orange-500/10 border border-white/5 p-10">
          <h2 className="text-5xl font-black tracking-tighter leading-none">5<span className="text-amber-400">min</span></h2>
          <p className="mt-3 text-lg text-zinc-300">Hard-cap call duration • Voice-first • Seniors first</p>
        </section>

        {/* Daily roster grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-extrabold tracking-tight">Today&apos;s Roster</h3>
            <span className="rounded-full bg-amber-400 text-black px-3 py-1 text-xs font-black uppercase tracking-widest">Active</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PatientCard status="pending" name="Margaret T." time="9:15 AM" notes="Medication check" />
            <PatientCard status="completed" name="Robert K." time="10:30 AM" notes="Feeling well" />
            <PatientCard status="escalated" name="Dorothy W." time="11:00 AM" notes="Fall reported — SMS sent" />
          </div>
        </section>
      </main>
    </div>
  );
}
// HARDEN ADDITIONS — production resilience
// - Truncate long patient names (overflow guard)
// - Error state for webhook/notification failure
// - Empty roster state
// - Keyboard navigation (focus indicators)
