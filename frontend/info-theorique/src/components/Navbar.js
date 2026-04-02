function Navbar() {
  return (
    <nav className="bg-gray-800/50 shadow-md px-40 py-4 flex items-center justify-between">
      <a href="/" className="text-xl font-bold text-white">
        Info-Théorique
      </a>

      <ul className="flex gap-6 text-sm font-medium text-gray-600">
        <li><a href="/" className="text-white hover:text-white transition-colors">Algorithmique</a></li>
        <li><a href="/about" className="hover:text-white transition-colors">Langage formel</a></li>
        <li><a href="/pricing" className="hover:text-white transition-colors">Algèbre linéaire</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
