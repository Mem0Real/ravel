import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const Modal = ({ handleClose, content, variant, className }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				variants={variant}
				initial="hidden"
				animate="visible"
				exit="exit"
				className={`${className}`}
			>
				{content}
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
