const slideFromRight = {
	hidden: {
		x: "100vh",
		opacity: 0,
	},
	visible: {
		x: "10px",
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: [0, 0.71, 0.2, 1.01],
		},
	},
	exit: {
		x: "10vh",
		opacity: 0,
	},
};

const flip = {
	hidden: {
		transform: "scale(0) rotateX(-360deg)",
		opacity: 0,
		transition: {
			delay: 0.3,
		},
	},
	visible: {
		transform: " scale(1) rotateX(0deg)",
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		transform: "scale(0) rotateX(360deg)",
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const newspaper = {
	hidden: {
		transform: "scale(0) rotate(720deg)",
		opacity: 0,
		transition: {
			delay: 0.3,
		},
	},
	visible: {
		transform: " scale(1) rotate(0deg)",
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		transform: "scale(0) rotate(-720deg)",
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

const badSuspension = {
	hidden: {
		y: "-100vh",
		opacity: 0,
		transform: "scale(0) rotateX(-360deg)",
	},
	visible: {
		y: "-25vh",
		opacity: 1,
		transition: {
			duration: 0.2,
			type: "spring",
			damping: 15,
			stiffness: 500,
		},
	},
	exit: {
		y: "-100vh",
		opacity: 0,
	},
};

const textSlideToR = {
	hidden: { opacity: 0, x: -35 },
	visible: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: 50 },
};

const textSlideToL = {
	hidden: { opacity: 0, x: 50 },
	visible: { opacity: 1, x: 0 },
	exit: { opacity: 0, x: -35 },
};

export {
	slideFromRight,
	flip,
	newspaper,
	badSuspension,
	textSlideToL,
	textSlideToR,
};
