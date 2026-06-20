import { component$, useSignal } from "@builder.io/qwik";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export const Nav = component$(() => {
  const open = useSignal(false);

  return (
    <header class="site-header">
      <nav class={`container nav${open.value ? " is-open" : ""}`}>
        <a href="#home" class="nav__logo" aria-label="Home">
          <img src="/images/logo.png" alt="Thande Roy" height={40} />
        </a>

        <button
          type="button"
          class="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open.value}
          onClick$={() => (open.value = !open.value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick$={() => (open.value = false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
});
