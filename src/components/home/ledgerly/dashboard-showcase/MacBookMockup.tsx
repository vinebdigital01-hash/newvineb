import React from "react";
import { cn } from "@/lib/utils";

/* ── Realistic MacBook Keyboard Key ────────────────────────── */
function Key({ 
  label, 
  sub, 
  w, 
  h = 42, 
  fontSize = 11 
}: { 
  label: string; 
  sub?: string; 
  w?: number; 
  h?: number; 
  fontSize?: number;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center select-none shrink-0"
      style={{
        width: w ? `${w}px` : undefined,
        flex: w ? undefined : 1,
        height: `${h}px`,
        background: "linear-gradient(180deg, #2E2E31 0%, #232326 40%, #1E1E21 100%)",
        borderRadius: "4px",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 1px rgba(0,0,0,0.3)",
        border: "0.5px solid rgba(255,255,255,0.04)",
      }}
    >
      {sub && (
        <span style={{ fontSize: `${fontSize - 1}px`, lineHeight: 1, color: "rgba(255,255,255,0.35)", marginBottom: "1px" }}>
          {sub}
        </span>
      )}
      <span style={{ fontSize: `${fontSize}px`, lineHeight: 1, color: "rgba(255,255,255,0.5)", fontWeight: 500, letterSpacing: "0.02em" }}>
        {label}
      </span>
    </div>
  );
}

/* ── Fn key (shorter height) ───────────────────────────────── */
function FnKey({ label, w }: { label: string; w?: number }) {
  return (
    <div
      className="flex items-center justify-center select-none shrink-0"
      style={{
        width: w ? `${w}px` : undefined,
        flex: w ? undefined : 1,
        height: "24px",
        background: "linear-gradient(180deg, #2A2A2D 0%, #1F1F22 100%)",
        borderRadius: "2px",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 1px rgba(0,0,0,0.25)",
        border: "0.5px solid rgba(255,255,255,0.03)",
      }}
    >
      <span style={{ fontSize: "5px", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>{label}</span>
    </div>
  );
}

/* ── Arrow half-height key ─────────────────────────────────── */
function ArrowKey({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center select-none"
      style={{
        width: "42px",
        height: "18px",
        background: "linear-gradient(180deg, #2A2A2D 0%, #1F1F22 100%)",
        borderRadius: "2px",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 1px 1px rgba(0,0,0,0.25)",
        border: "0.5px solid rgba(255,255,255,0.03)",
      }}
    >
      <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.4)" }}>{label}</span>
    </div>
  );
}

export function MacBookMockup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[1000px] perspective-[2500px] mb-32 flex flex-col items-center",
        className
      )}
    >
      <div 
        className="relative w-full transition-transform duration-1000 ease-out flex flex-col items-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* ═══════════ TOP LID (Screen) ═══════════ */}
        <div 
          className="relative w-full rounded-[1.5rem] md:rounded-[2rem] p-[2px] md:p-[3px] shadow-2xl origin-bottom z-10"
          style={{ 
            background: "linear-gradient(135deg, #E8E8EA 0%, #C8C8CA 50%, #B8B8BA 100%)",
            transform: "rotateX(-5deg) translateZ(10px)", 
          }}
        >
          {/* Bezel: 12px solid black */}
          <div className="relative w-full rounded-[1.4rem] md:rounded-[1.8rem] bg-[#000000] p-[12px] overflow-hidden flex flex-col">
            
            {/* Camera Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] md:w-[140px] h-[20px] md:h-[24px] bg-[#000000] rounded-b-xl z-50 flex justify-center items-center pb-0.5">
              <div className="w-[6px] h-[6px] rounded-full bg-[#0D0D0D] border border-[#222] flex items-center justify-center">
                <div className="w-[2px] h-[2px] bg-[#1a3a6a] rounded-full opacity-80" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative w-full aspect-[16/10] bg-[#F5F5F7] rounded-[4px] overflow-hidden z-10">
              <div className="absolute inset-0 overflow-y-auto hide-scrollbar bg-[#F5F5F7]">
                {children}
              </div>
            </div>
            
            {/* Bottom bezel */}
            <div className="h-[8px]" />
          </div>
        </div>

        {/* ═══════════ HINGE ═══════════ */}
        <div 
          className="w-[82%] h-[3px] z-[5] -mt-[1px] relative"
          style={{
            background: "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)",
            boxShadow: "0 -4px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
            borderRadius: "0 0 4px 4px",
          }}
        />

        {/* ═══════════ BOTTOM BASE (Keyboard Deck) ═══════════ */}
        <div 
          className="relative w-full aspect-[16/7] rounded-b-3xl rounded-t-sm origin-top -mt-[2px] flex flex-col items-center pt-4 md:pt-6 px-6 md:px-10 overflow-hidden"
          style={{ 
            background: "linear-gradient(135deg, #E8E8EA 0%, #D0D0D2 40%, #C8C8CA 60%, #B8B8BA 100%)",
            transform: "rotateX(60deg) translateY(-2px)", 
            boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)",
            borderTop: "1px solid rgba(140,144,148,0.5)",
          }}
        >
          {/* Deck with speakers + keyboard */}
          <div className="w-full flex justify-between gap-4 md:gap-8 px-4 md:px-8">
            
            {/* Left Speaker */}
            <div className="w-16 md:w-24 h-48 md:h-64 bg-[#9A9EA2] rounded-md opacity-30 mix-blend-multiply p-1 overflow-hidden shrink-0">
              <div className="w-full h-full bg-[radial-gradient(#5a5d60_0.5px,transparent_0.5px)] [background-size:2.5px_2.5px]" />
            </div>
            
            {/* ── KEYBOARD ── */}
            <div 
              className="flex-1 max-w-[760px] rounded-lg p-[8px] md:p-3 flex flex-col gap-[4px] items-stretch justify-center"
              style={{
                background: "#DCDCDE",
                boxShadow: "inset 0 2px 6px rgba(0,0,0,0.12), inset 0 -1px 0 rgba(255,255,255,0.4)",
                border: "0.5px solid rgba(255,255,255,0.3)",
              }}
            >
              {/* Row 0: Function Keys */}
              <div className="flex w-full gap-[4px]">
                <FnKey label="esc" w={48} />
                <FnKey label="F1" />
                <FnKey label="F2" />
                <FnKey label="F3" />
                <FnKey label="F4" />
                <FnKey label="F5" />
                <FnKey label="F6" />
                <FnKey label="F7" />
                <FnKey label="F8" />
                <FnKey label="F9" />
                <FnKey label="F10" />
                <FnKey label="F11" />
                <FnKey label="F12" />
                <FnKey label="⏏" w={48} />
              </div>

              {/* Row 1: Number Row */}
              <div className="flex w-full gap-[4px]">
                <Key label="`" sub="~" />
                <Key label="1" sub="!" />
                <Key label="2" sub="@" />
                <Key label="3" sub="#" />
                <Key label="4" sub="$" />
                <Key label="5" sub="%" />
                <Key label="6" sub="^" />
                <Key label="7" sub="&" />
                <Key label="8" sub="*" />
                <Key label="9" sub="(" />
                <Key label="0" sub=")" />
                <Key label="-" sub="_" />
                <Key label="=" sub="+" />
                <Key label="⌫" w={69} fontSize={12} />
              </div>

              {/* Row 2: QWERTY top */}
              <div className="flex w-full gap-[4px]">
                <Key label="⇥" w={60} fontSize={12} />
                <Key label="Q" />
                <Key label="W" />
                <Key label="E" />
                <Key label="R" />
                <Key label="T" />
                <Key label="Y" />
                <Key label="U" />
                <Key label="I" />
                <Key label="O" />
                <Key label="P" />
                <Key label="[" sub="{" />
                <Key label="]" sub="}" />
                <Key label="\" sub="|" />
              </div>

              {/* Row 3: Home row */}
              <div className="flex w-full gap-[4px]">
                <Key label="⇪" w={75} fontSize={10} />
                <Key label="A" />
                <Key label="S" />
                <Key label="D" />
                <Key label="F" />
                <Key label="G" />
                <Key label="H" />
                <Key label="J" />
                <Key label="K" />
                <Key label="L" />
                <Key label=";" sub=":" />
                <Key label="'" sub='"' />
                <Key label="↩" w={87} fontSize={12} />
              </div>

              {/* Row 4: Bottom QWERTY */}
              <div className="flex w-full gap-[4px]">
                <Key label="⇧" w={102} fontSize={12} />
                <Key label="Z" />
                <Key label="X" />
                <Key label="C" />
                <Key label="V" />
                <Key label="B" />
                <Key label="N" />
                <Key label="M" />
                <Key label="," sub="<" />
                <Key label="." sub=">" />
                <Key label="/" sub="?" />
                <Key label="⇧" w={102} fontSize={12} />
              </div>

              {/* Row 5: Spacebar Row */}
              <div className="flex w-full gap-[4px]">
                <Key label="fn" w={42} fontSize={9} />
                <Key label="⌃" w={42} fontSize={12} />
                <Key label="⌥" w={48} fontSize={12} />
                <Key label="⌘" w={57} fontSize={12} />
                {/* Spacebar */}
                <Key label="" w={270} h={42} />
                <Key label="⌘" w={57} fontSize={12} />
                <Key label="⌥" w={48} fontSize={12} />
                
                {/* Arrow cluster */}
                <div className="flex gap-[4px] ml-auto">
                  <div className="w-[42px] flex flex-col justify-end">
                    <ArrowKey label="◀" />
                  </div>
                  <div className="w-[42px] flex flex-col justify-between">
                    <ArrowKey label="▲" />
                    <ArrowKey label="▼" />
                  </div>
                  <div className="w-[42px] flex flex-col justify-end">
                    <ArrowKey label="▶" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Speaker */}
            <div className="w-16 md:w-24 h-48 md:h-64 bg-[#9A9EA2] rounded-md opacity-30 mix-blend-multiply p-1 overflow-hidden shrink-0">
              <div className="w-full h-full bg-[radial-gradient(#5a5d60_0.5px,transparent_0.5px)] [background-size:2.5px_2.5px]" />
            </div>

          </div>

          {/* Trackpad */}
          <div 
            className="mt-4 md:mt-6 z-10 shrink-0"
            style={{
              width: "360px",
              height: "170px",
              background: "linear-gradient(145deg, #D8D8DA, #C4C4C6)",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: "8px",
              boxShadow: "inset 0 1px 3px rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.08)",
            }}
          />
          
          {/* Thumb groove */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-40 h-[8px] bg-[#8A8E92] rounded-t-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]" />
        </div>
        
        {/* Ground shadow */}
        <div 
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[110%] h-[120px] bg-black rounded-[100%] z-[-2] pointer-events-none"
          style={{ filter: "blur(40px)", opacity: 0.25 }}
        />
        
      </div>
    </div>
  );
}
