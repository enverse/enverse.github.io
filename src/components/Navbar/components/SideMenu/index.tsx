import { Fragment, h } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

import './index.scss';

import { Link } from '../../types/common';

type Props = {
  isOpen: boolean;
  links: Link[];
  onChange: (isOpen: boolean) => void;
};

export default ({ links: mobileLinks, onChange, isOpen }: Props) => {
  const sideMenuContainer = useRef<HTMLDivElement>();
  useEffect(() => {
    function handleClickOutside(event) {
      if (sideMenuContainer.current && !sideMenuContainer.current.contains(event.target)) {
        onChange(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isOpen) {
    return (
      <Fragment>
        <div ref={(el) => (sideMenuContainer.current = el)} class="navbar__side-menu-container">
          {mobileLinks.map(({ title, to, highlight }) => (
            <div class={highlight && 'navbar__links-container--highlight'}>
              <a onClick={() => onChange(false)} href={to}>
                {title}
              </a>
            </div>
          ))}
        </div>
        <div class="navbar__side-menu-background"></div>
        <div class="navbar__side-manu-icon-container">
          <i class=" icon-close" />
        </div>
      </Fragment>
    );
  }

  return null;
};
