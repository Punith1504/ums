import { GlassCard, ClayCard } from "@/components/ui/VibeCard";
import Link from "next/link";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-amber-950 dark:to-slate-950">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">Super Admin Control</h1>
            <p className="text-muted-foreground mt-1">Configure college settings and modules.</p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="/login" className="text-sm font-medium hover:underline text-muted-foreground">Sign Out</Link>
            <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 shadow-lg"></div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ClayCard className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Active Modules</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Academics', 'Finance & Ledgers', 'Campus Events', 'Hostel Management'].map((mod, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur border border-white/20 shadow-sm">
                  <span className="font-semibold">{mod}</span>
                  <div className={`w-12 h-6 rounded-full flex items-center p-1 cursor-pointer transition-colors ${i === 3 ? 'bg-muted-foreground/30' : 'bg-green-500'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform ${i === 3 ? '' : 'translate-x-5'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </ClayCard>

          <GlassCard className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Theme Settings</h2>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Primary Color Accent</label>
                <div className="flex gap-3 mt-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 ring-2 ring-offset-2 ring-purple-500 ring-offset-background cursor-pointer shadow-sm"></div>
                  <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
                  <div className="w-8 h-8 rounded-full bg-emerald-500 cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
                  <div className="w-8 h-8 rounded-full bg-amber-500 cursor-pointer shadow-sm hover:scale-110 transition-transform"></div>
                </div>
              </div>
              <button className="w-full py-3 bg-foreground text-background rounded-xl font-semibold hover:opacity-90 active:scale-95 transition-all shadow-md">
                Save Changes
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </main>
  );
}
