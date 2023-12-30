import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const Modal = ({ handleClose, content, variant }) => {
	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				onClick={(e) => e.stopPropagation()}
				variants={variant}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				{content}
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
