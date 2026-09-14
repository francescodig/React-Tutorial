export default function HeroSection() {
  return (
    <section className="relative w-full max-w-5xl mx-auto my-4 px-4">
      
      <div className="grid grid-cols-2 grid-rows-2 gap-2 h-96">
        <div className="bg-gray-200 w-full h-full rounded-tl-md"></div>
        <div className="bg-gray-300 w-full h-full rounded-tr-md"></div>
        <div className="bg-gray-300 w-full h-full rounded-bl-md"></div>
        <div className="bg-gray-200 w-full h-full rounded-br-md"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-8">
        <div className="bg-[#FAF7F2] p-8 text-center shadow-md border border-gray-100 max-w-md w-full">
          <h2 className="text-xl text-gray-800 tracking-widest uppercase mb-4 font-serif leading-relaxed">
            Fatto a mano,<br />con cura e passione
          </h2>
          <p className="text-sm text-gray-600 italic">
            Accessori unici, per ogni tua storia.
          </p>
        </div>
      </div>
      
    </section>
  );
}