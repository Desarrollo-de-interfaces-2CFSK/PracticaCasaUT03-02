import React from 'react';

export default function Footer() {
  return (
    <footer 
      role="contentinfo" 
      className="bg-teal-900 text-teal-100 text-center p-8 w-full mt-auto"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
            <h4 className="font-bold text-white mb-2">TerraBloom</h4>
            <p>Productos frescos de calidad superior.</p>
        </div>
        <div>
            <h4 className="font-bold text-white mb-2">Enlaces</h4>
            <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white">Envíos</a></li>
            </ul>
        </div>
        <div>
            <p className="mt-4">© 2025 TerraBloom. AbdelMoghit Samini</p>
        </div>
      </div>
    </footer>
  );
}