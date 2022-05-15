import { store as reactNotifications } from 'react-notifications-component';

const notify = ({
  title = '',
  message = '',
  type = 'info',
  insert = 'top',
  container = 'top-right',
  animationIn = ['animated', 'fadeIn'],
  animationOut = ['animated', 'fadeOut'],
  dismiss = {
    duration: 2000,
    onScreen: true,
    pauseOnHover: true
  }
}) => reactNotifications.addNotification({
  title,
  message,
  type,
  insert,
  container,
  animationIn,
  animationOut,
  dismiss
});

// eslint-disable-next-line import/prefer-default-export
export { notify };
