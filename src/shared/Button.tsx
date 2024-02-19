'use client'

import { motion } from 'framer-motion'

const btnVariants = {
	hover: {
		scale: 1.1,
		transition: {
			type: 'spring',
			stiffness: 400,
			damping: 17,
			duration: 0.3,
		},
	},
	tap: { scale: 0.9 },
}

type ButtonProps = {
	onClick?: () => void
	className?: string
	text?: string
}

export default function Button(props: ButtonProps) {
	const { onClick, className, text } = props

	return (
		<motion.button
			onClick={onClick}
			className={className}
			variants={btnVariants}
			whileHover='hover'
			whileTap='tap'
		>
			{text}
		</motion.button>
	)
}
