import { createRef, Fragment, h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

import { Link } from './types/common';

import './index.scss';
import SideMenu from './components/SideMenu';

type Props = {
  inverted?: boolean;
  links?: Link[];
};

const BURGER_MENU_WIDTH = 200;
const LOGO_WIDTH = 250;

export default ({
  inverted,
  links: initialLinks = [
    { to: `/#about`, title: 'About' },
    { to: `/#testimonials`, title: 'Testimonials' },
    { to: `/#blog`, title: 'Blog' },
    { to: `/#contact`, title: 'Contact', highlight: true }
  ]
}: Props) => {
  const [textLinkDimensions, saveTextLinkDimensions] = useState([]);
  const [hiddenItems, setHiddenItems] = useState<number[]>([]);
  const [sideMenuOpen, setSideMenu] = useState(false);

  const navbarRef = useRef<HTMLDivElement>();

  const textLinksRefs = useRef(initialLinks.map(() => createRef<HTMLAnchorElement>()));

  useEffect(() => {
    const calculatedTextLinkDimensions = textLinksRefs.current.map((textLink) =>
      textLink.current ? textLink.current.getBoundingClientRect().width + 100 : 0
    );

    saveTextLinkDimensions(calculatedTextLinkDimensions);
  }, []);

  const updateDimensions = useCallback(() => {
    let textLinksWidth = 0;
    /* STORE HIDDEN INDEXES */
    const hiddenItems: number[] = [];
    const fixedMenuItems = hiddenItems.length > 0 ? BURGER_MENU_WIDTH + LOGO_WIDTH : LOGO_WIDTH;
    const offsetWidth = navbarRef.current.offsetWidth;

    textLinkDimensions.forEach((textLinkWidth, index) => {
      textLinksWidth += textLinkWidth;
      if (textLinksWidth + fixedMenuItems > offsetWidth) {
        hiddenItems.push(index);
      }
    });
    setHiddenItems(hiddenItems);
  }, [textLinkDimensions]);

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    updateDimensions();

    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  const desktopLinks: Link[] = [];
  const mobileLinks: Link[] = [];
  initialLinks.forEach((link, index) => {
    if (hiddenItems.indexOf(index) === -1) {
      desktopLinks.push(link);
    } else {
      mobileLinks.push(link);
    }
  });

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
        <nav class="navbar__text-links-block">
          {desktopLinks.map(({ to, title, highlight }, idx) => (
            <a ref={textLinksRefs.current[idx]} href={to} class={highlight && 'navbar__links-container--highlight'}>
              {title}
            </a>
          ))}
        </nav>
        {hiddenItems.length > 0 && !sideMenuOpen && (
          <div class="navbar__side-menu-icon">
            <i
              onClick={() => {
                setSideMenu(true);
              }}
              class={sideMenuOpen ? 'icon-close' : 'icon-menu'}
            />
          </div>
        )}
      </header>

      <SideMenu isOpen={sideMenuOpen} links={mobileLinks} onChange={(isOpen) => setSideMenu(isOpen)} />
    </Fragment>
  );
};
