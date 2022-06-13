import { ComponentChild, Fragment, h } from 'preact';
import './index.scss';

type Props = {
  fullScreen?: boolean;
  children?: ComponentChild;
};

const ConditionalWrapper = ({ fullScreen, children }: Props) =>
  fullScreen ? <div class="contact-form__spinner-overlay">{children}</div> : <Fragment>{children}</Fragment>;

export default ({ fullScreen }: Props) => {
  return (
    <ConditionalWrapper fullScreen={fullScreen}>
      <svg class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
    </ConditionalWrapper>
  );
};
