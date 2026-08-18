function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#07111f]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-slate-700" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#5fbe3e]" />
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
          Minivel
        </p>
      </div>
    </div>
  );
}

export default PageLoader;