import React from 'react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Intro', href: '#hero' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'testimonies', label: 'Product', href: '#testimonies' },
  { id: 'footer', label: 'Contact', href: '#contact' },
];

/**
 * Header
 * Fixed navigation bar featuring the responsive PROMPTED SITE logo,
 * desktop navigation links with hover flipper effects, and mobile drawer.
 */
export const Header: React.FC = () => {
  return (
    <header id="site-header" className="link-header">
      {/* Brand Logo */}
      <a id="site-header-logo" data-width="94" href="#hero" aria-label="PROMPTED SITE Home">
        <div>
          <svg viewBox="0 0 94 21">
            <use href="#logo-tmpl" />
          </svg>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav id="site-header-nav" className="desktop-only" aria-label="Main Navigation">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} className="is-flipper" data-id={item.id}>
              <a className="is-flipper-target" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div id="site-header-line" className="o-dashline" />
      </nav>

      {/* Mobile Menu Drawer */}
      <div id="site-header-mobile-menu" className="mobile-only">
        <div />
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id} data-id={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div id="site-header-mobile-bottom">
          <div className="sub2">general enquires:</div>
          <a className="sub1" href="#contact" onClick={(e) => e.preventDefault()}>
            hello@promptedsite.com
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div id="site-header-mobile-btn" className="mobile-only" role="button" tabIndex={0} aria-label="Toggle Navigation">
        <span>Menu</span>
        <span>Close</span>
      </div>

      <div id="site-header-blocker" />
    </header>
  );
};
