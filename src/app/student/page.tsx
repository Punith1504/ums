import { GlassCard, ClayCard } from "@/components/ui/VibeCard";
import Link from "next/link";

export default function StudentDashboard() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Welcome back, Alex</h1>
            <p className="text-muted-foreground mt-1">Here is your daily overview.</p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-sm font-medium hover:underline text-muted-foreground">Sign Out</Link>
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ClayCard className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Today's Classes</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur border border-white/20 hover:scale-[1.02] transition-transform">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">CS101 - Intro to Programming</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">10:00 AM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Room 402 • Prof. Smith</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur border border-white/20 hover:scale-[1.02] transition-transform">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">MTH201 - Linear Algebra</span>
                  <span className="text-purple-600 dark:text-purple-400 font-medium">1:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Room 105 • Prof. Johnson</p>
              </div>
            </div>
          </ClayCard>

          <GlassCard className="col-span-1 flex flex-col justify-between">
            <h2 className="text-xl font-bold mb-2">Outstanding Fees</h2>
            <div className="flex flex-col items-center justify-center flex-1">
              <span className="text-5xl font-extrabold text-destructive drop-shadow-sm">$1,250</span>
              <span className="text-sm text-muted-foreground mt-2">Due in 15 days</span>
            </div>
            <button className="w-full mt-4 py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md">
              Pay Now
            </button>
          </GlassCard>
        </div>

        <ClayCard>
          <h2 className="text-xl font-bold mb-4">Campus Events</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[280px] h-40 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-5 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <h3 className="relative z-10 font-bold text-xl">Tech Fest 2026</h3>
                <p className="relative z-10 text-sm opacity-90 mt-1">Registration Open</p>
              </div>
            ))}
          </div>
        </ClayCard>
      </div>
    </main>
  );
}
