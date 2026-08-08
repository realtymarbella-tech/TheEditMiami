export default function Footer() {
  return (
    <footer className="bg-ocean-dk text-charcoal-200 pt-14 px-6 md:px-16 pb-8 border-t border-rose-lt">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 mb-10">
        <div>
          <div className="flex flex-col items-start leading-none mb-3.5 w-max">
            <span className="font-serif text-lg text-cream">SANTAMARIA</span>
            <span className="flex items-center gap-2 self-stretch mt-1">
              <span className="flex-1 h-px bg-rose-lt" />
              <span className="text-[8px] tracking-[0.4em] text-rose-lt">COLLECTION</span>
              <span className="flex-1 h-px bg-rose-lt" />
            </span>
          </div>
          <p className="text-[13px] font-light leading-relaxed">Selección editorial de residencias de nueva construcción en Miami. Curadas para quienes conocen la diferencia.</p>
        </div>
        <div>
          <h5 className="text-[10.5px] font-medium tracking-[0.2em] uppercase text-rose-lt mb-3.5">Colección</h5>
          <a href="/cipriani-residences" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Cipriani Residences</a>
          <a href="/elle-residences-miami" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Elle Residences</a>
          <a href="/domus-brickell" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Domus Brickell</a>
          <a href="#comparar" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">Comparar torres</a>
        </div>
        <div>
          <h5 className="text-[10.5px] font-medium tracking-[0.2em] uppercase text-rose-lt mb-3.5">Contacto</h5>
          <a href="mailto:info@santamaria-collection.com" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">info@santamaria-collection.com</a>
          <a href="https://wa.me/34610589716" className="block text-[13px] font-light leading-8 hover:text-cream transition-colors">WhatsApp +34 610 589 716</a>
          <p className="text-[13px] font-light leading-8">Marbella · Miami</p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 text-[10.5px] font-light text-charcoal-500 leading-relaxed">
        © 2026 Santamaría Collection. Todos los derechos reservados. Las imágenes son representaciones artísticas con fines ilustrativos. Precios, plazos y especificaciones sujetos a cambios sin previo aviso. Esta no es una oferta de venta donde la ley lo prohíba. Igualdad de oportunidades en vivienda.
      </div>
    </footer>
  );
}
