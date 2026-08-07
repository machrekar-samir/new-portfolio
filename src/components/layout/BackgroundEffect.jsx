export default function BackgroundEffect() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-mesh" />

      <div className="absolute inset-0 opacity-40 animate-grid-shift">
        <div className="absolute inset-0 dot-grid" />
      </div>

      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[120px] animate-orb-1" />
      <div className="absolute top-1/3 -right-40 h-[480px] w-[480px] rounded-full bg-secondary/8 blur-[110px] animate-orb-2" />
      <div className="absolute -bottom-40 left-1/3 h-[440px] w-[440px] rounded-full bg-violet/8 blur-[100px] animate-orb-3" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(45,212,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg/60" />
    </div>
  )
}
