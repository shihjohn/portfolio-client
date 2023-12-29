import { AnimatePresence, motion } from "framer-motion";
import { RxInfoCircled, RxCheckCircled } from "react-icons/rx";
import { BiError } from "react-icons/bi";

interface notificationProps {
  message: string;
  type: string;
}
const Notification = ({ message, type }: notificationProps) => {
  const renderIcon = () => {
    switch (type) {
      case "success":
        return <RxCheckCircled className="flex-none	text-10 w-10 h-10" />;
      case "error":
        return <BiError className="flex-none	text-10 w-10 h-10" />;
      default:
        return <RxInfoCircled className="flex-none	text-10 w-10 h-10" />;
    }
  };
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.div
          id="notification"
          initial={{ opacity: 0, y: -200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.1, delay: 0.2 },
          }}
          exit={{
            opacity: 0,
            y: -200,
            transition: { duration: 0.2, delay: 1 },
          }}
        >
          <div className="notification">
            <div className={`notification-box flex gap-4 items-center ${type}`}>
              {renderIcon()}
              <span className="flex-auto">{message}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
