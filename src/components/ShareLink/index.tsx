import './index.css';

import { useCallback, useState } from 'preact/hooks';
import Notification, { Props as NotificationProps } from '../Notification';

type Props = {
  title: string;
  link: string;
};

export default ({ link, title }: Props) => {
  const [notificationProps, setNotificationProps] = useState<Pick<NotificationProps, 'message' | 'open'>>();

  const copyToClipBoard = useCallback(() => {
    navigator.clipboard.writeText(`Read about ${title} on ${link}`).then(() =>
      setNotificationProps({
        message: 'Copied to clipboard',
        open: true
      })
    );
  }, [navigator]);

  return (
    <>
      <button className="share-link__share-button" onClick={copyToClipBoard}>
        <i class="fas fa-link"></i>
      </button>
      <Notification {...notificationProps} onClose={() => setNotificationProps({ message: '', open: false })} />
    </>
  );
};
