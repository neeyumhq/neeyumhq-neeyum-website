"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
  trend?: {
    value: number;
    label: string;
    isUp: boolean;
  };
  accentColor?: "purple" | "blue" | "green" | "yellow" | "red";
}

const colorMap = {
  purple: "border-t-purple-500 text-purple-400",
  blue: "border-t-blue-500 text-blue-400",
  green: "border-t-green-500 text-green-400",
  yellow: "border-t-yellow-500 text-yellow-500",
  red: "border-t-red-500 text-red-500",
};

export function StatCard({ label, value, sublabel, trend, accentColor = "purple" }: StatCardProps) {
  return (
    <div className={cn(
      "relative bg-white/[0.03] border border-white/5 rounded-[32px] p-8 overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:border-white/10 group shadow-2xl shadow-black/20 hover:shadow-purple-500/5",
      accentColor && `border-t-4 ${colorMap[accentColor].split(' ')[0]}`
    )}
    >
      {/* Background Glow */}
      <div className={cn(
        "absolute -right-8 -top-8 w-32 h-32 blur-[100px] opacity-10 transition-opacity duration-700 group-hover:opacity-30",
        accentColor === "purple" && "bg-purple-500",
        accentColor === "blue" && "bg-blue-500",
        accentColor === "green" && "bg-green-500",
        accentColor === "yellow" && "bg-yellow-500",
        accentColor === "red" && "bg-red-500",
      )} />

      <h3 className="text-[10px] font-black text-white/30 tracking-[0.3em] mb-6 uppercase flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-current opacity-50" />
        {label}
      </h3>

      <div className="flex flex-col gap-2">
        <p className="text-4xl font-black tracking-tight text-white group-hover:translate-x-1 transition-transform duration-500 origin-left">
          {value}
        </p>
        {sublabel && (
          <p className="text-[11px] text-white/20 font-bold tracking-wide flex items-center gap-1.5">
            {sublabel}
          </p>
        )}
      </div>

      {trend && (
        <div className={cn(
          "mt-6 flex items-center gap-2 px-3 py-1.5 rounded-xl w-fit text-[10px] font-black uppercase tracking-[0.1em]",
          trend.isUp ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"
        )}>
          {trend.isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
          <span>{trend.value}%</span>
          <span className="opacity-40">{trend.label}</span>
        </div>
      )}
    </div>
  );
}
