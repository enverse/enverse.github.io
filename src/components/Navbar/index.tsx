import { Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import './index.css';

type Props = {
  inverted?: boolean;
  links?: Array<{ to: string; title: string; highlight?: boolean }>;
};

export default ({ inverted, links }: Props) => {
  const finalLinks = links ?? [
    { to: `/#about`, title: 'About' },
    { to: `/#testimonials`, title: 'Testimonials' },
    { to: `/#blog`, title: 'Blog' },
    { to: `/#contact`, title: 'Contact', highlight: true }
  ];

  return (
    <Fragment>
      <header
        class={`navbar__desktop-menu mdl-layout__header mdl-layout__header--transparent ${
          inverted && 'navbar__desktop-menu--inverted'
        }`}
      >
        {/* <!-- Title --> */}
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">
            <a href="/">
              <img
                alt="enverse-logo"
                src={
                  inverted
                    ? '/static/assets/image/logo-green-text-black.svg'
                    : '/static/assets/image/logo-all-white.svg'
                }
                width="164"
                height="27"
              />
            </a>
          </span>
          {/* <!-- Add spacer, to align navigation to the right --> */}
          <div class="mdl-layout-spacer"></div>
          {/* <!-- Navigation --> */}
          <nav class="mdl-navigation navbar__links-container mdl-layout--large-screen-only">
            {finalLinks.map(({ to, title, highlight }) => (
              <a href={to} class={highlight && 'navbar__links-container--highlight'}>
                {title}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <nav class="mdl-navigation">
          {finalLinks.map(({ to, title }) => (
            <a href={to}>{title}</a>
          ))}
        </nav>
      </div>
    </Fragment>
  );
};
