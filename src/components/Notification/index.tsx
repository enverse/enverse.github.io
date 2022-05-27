import './index.css';

export type Props = {
  message: string;
  duration?: number;
  onClose?: () => void;
  open: boolean;
};

export default ({ message, onClose, open }: Props) => {
  if (open) {
    return (
      <div class="notification__container">
        <p>{message}</p>
        <span onClick={onClose} class="material-icons-outlined">
          close
        </span>
      </div>
    );
  }
  return null;
};
