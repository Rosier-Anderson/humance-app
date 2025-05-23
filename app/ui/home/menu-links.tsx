export default function MenuLinks() {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Pages", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog:id1" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-zinc  rounded-2xl w-full h-full">
      <nav className="">
        <ul className="flex items-center gap-4 text-lg font-bold text-white ">
          {navLinks.map((link) => (
            <li key={link.name} className="">
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
