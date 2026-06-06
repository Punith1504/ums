"use client";

import { useRouter } from "next/navigation";
import { ClayButton } from "@/components/ui/ClayButton";

export function LoginForm() {
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="collegeCode">
            College Code
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring"
            id="collegeCode"
            defaultValue="COL123"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="uniqueId">
            Admission / Employee ID
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring"
            id="uniqueId"
            defaultValue="ID001"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium leading-none" htmlFor="password">
            Password
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring"
            id="password"
            type="password"
            defaultValue="password"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-bold">Quick Preview Roles</p>
        <div className="grid grid-cols-1 gap-3">
          <ClayButton className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg" onClick={(e) => { e.preventDefault(); router.push("/student"); }}>
            Login as Student
          </ClayButton>
          <ClayButton className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 shadow-lg" onClick={(e) => { e.preventDefault(); router.push("/faculty"); }}>
            Login as Faculty
          </ClayButton>
          <ClayButton className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg" onClick={(e) => { e.preventDefault(); router.push("/admin"); }}>
            Login as Admin
          </ClayButton>
        </div>
      </div>
    </div>
  );
}
