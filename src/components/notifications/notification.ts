import {
  NOTIFICATION_TYPE,
  Store,
  iNotification,
} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

interface IOpenNotificationProps {
  title: string
  message?: string
  type: NOTIFICATION_TYPE
  duration?: number
}

export const notification = {
  open: ({
    title,
    message,
    type,
    duration,
  }: IOpenNotificationProps): string => {
    const config: iNotification = {
      title,
      message,
      type,
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      userDefinedTypes: [
        { name: 'success', htmlClasses: ['successNotification'] },
        { name: 'info', htmlClasses: ['infoNotification'] },
        { name: 'warning', htmlClasses: ['warningNotification'] },
        { name: 'danger', htmlClasses: ['dangerNotification'] },
      ],
    }

    if (duration) {
      config.dismiss = {
        duration,
        onScreen: true,
      }
    }

    return Store.addNotification(config)
  },

  remove: (id: string) => {
    Store.removeNotification(id)
  },

  removeAll: (id: string) => {
    Store.removeAllNotifications()
  },
}
