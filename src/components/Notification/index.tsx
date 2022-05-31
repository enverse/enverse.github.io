import './index.css';

export type Props = {
  message: string;
  duration?: number;
  onClose: () => void;
  open: boolean;
};

export default ({ message, onClose, open }: Props) => {
  if (open) {
    return (
      <div class="notification__container">
        <p>{message}</p>
        <i onClick={onClose} class="icon-close" />
      </div>
    );
  }
  return null;
};
