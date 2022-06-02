import { Fragment, h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

import './index.scss';

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

  const textLinksBlockRef = useRef<HTMLElement>();
  const navbarRef = useRef<HTMLDivElement>();

  const handleWindowResize = useCallback(() => {
    console.log('width of text blocks', textLinksBlockRef.current.getBoundingClientRect().width);
    console.log('width of nvbar', navbarRef?.current?.getBoundingClientRect().width);
  }, [navbarRef, textLinksBlockRef]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <Fragment>
      <header ref={navbarRef} class={`navbar__desktop-menu ${inverted ? 'navbar__desktop-menu--inverted' : ''}`}>
        <span class="">
          <a href="/">
            <img
              alt="enverse-logo"
              src={
                inverted ? '/static/assets/image/logo-green-text-black.svg' : '/static/assets/image/logo-all-white.svg'
              }
              width="164"
              height="27"
            />
          </a>
        </span>
        {/* <!-- Add spacer, to align navigation to the right --> */}
        {/* <!-- Navigation --> */}
        <nav ref={(el) => (textLinksBlockRef.current = el)} class="navbar__text-links-block">
          {finalLinks.map(({ to, title, highlight }) => (
            <a href={to} class={highlight && 'navbar__links-container--highlight'}>
              {title}
            </a>
          ))}
        </nav>
      </header>
      {/* <div class="">
        <nav class="">
          {finalLinks.map(({ to, title }) => (
            <a href={to}>{title}</a>
          ))}
        </nav>
      </div> */}
    </Fragment>
  );
};
