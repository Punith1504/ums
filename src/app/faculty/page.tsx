import { GlassCard, ClayCard } from "@/components/ui/VibeCard";
import Link from "next/link";

export default function FacultyDashboard() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-950 dark:via-emerald-950 dark:to-slate-950">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Faculty Portal</h1>
            <p className="text-muted-foreground mt-1">Manage your classes and grades.</p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-sm font-medium hover:underline text-muted-foreground">Sign Out</Link>
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 shadow-lg"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ClayCard>
            <h2 className="text-xl font-bold mb-4">Your Schedule</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur border border-white/20 hover:scale-[1.02] transition-transform">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">CS101 - Intro to Programming</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">10:00 AM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Room 402 • 45 Students Enrolled</p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur border border-white/20 hover:scale-[1.02] transition-transform">
                <div className="flex justify-between">
                  <span className="font-semibold text-lg">CS305 - Advanced Algorithms</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">2:00 PM</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Room 210 • 30 Students Enrolled</p>
              </div>
            </div>
          </ClayCard>

          <GlassCard>
            <h2 className="text-xl font-bold mb-4">Pending Tasks</h2>
            <ul className="space-y-4">
              <li className="flex justify-between items-center p-3 bg-background/50 rounded-lg shadow-sm border border-border/50">
                <span className="font-medium">Grade CS101 Midterms</span>
                <span className="text-xs font-bold text-destructive px-2 py-1 bg-destructive/10 rounded-full">Urgent</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-background/50 rounded-lg shadow-sm border border-border/50">
                <span className="font-medium">Upload Syllabus for CS305</span>
                <span className="text-xs font-bold text-muted-foreground px-2 py-1 bg-muted rounded-full">This Week</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
