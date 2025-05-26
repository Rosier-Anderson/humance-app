export default function MenuLinks() {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Pages", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog:id1" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-zinc-100/60  rounded-4xl h-15 flex items-center justify-between px-4">
      <nav className="">
        <ul className="flex items-center gap-10 text-lg font-bold text-white ">
          {navLinks.map((link) => (
            <li key={link.name} className="cursor-pointer ">
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
