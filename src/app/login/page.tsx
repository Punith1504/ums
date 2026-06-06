import { LoginScene } from "./LoginScene";
import { GlassCard } from "@/components/ui/VibeCard";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <LoginScene />
      </div>

      <div className="z-10 w-full max-w-md mx-auto p-4">
        <GlassCard className="flex flex-col space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome to UMS</h1>
            <p className="text-sm text-muted-foreground">Sign in with your College ID</p>
          </div>

          <LoginForm />
        </GlassCard>
      </div>
    </main>
  );
}
