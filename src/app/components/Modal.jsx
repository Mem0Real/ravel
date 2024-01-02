import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { useContext } from "react";
import { SelectedContext } from "./dashComponents/operationsComponents/ListView";

const Modal = ({ handleClose, content, variant, className }) => {
	const { modalRef } = useContext(SelectedContext);

	return (
		<Backdrop onClick={handleClose}>
			<motion.div
				ref={modalRef}
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
