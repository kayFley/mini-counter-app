'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './page.module.scss'

import Button from '../shared/Button'

export default function App() {
	const [count, setCount] = useState(0)
	const [direction, setDirection] = useState(0)

	const onClickPlus = () => {
		setCount(prev => prev + 1)
		setDirection(20)
	}

	const onClickMinus = () => {
		setCount(prev => prev - 1)
		setDirection(-20)
	}

	const variants = {
		hidden: { opacity: 0, x: direction },
		visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
	}

	return (
		<div className={styles.App}>
			<div>
				<h2>Counter</h2>
				<motion.h1
					initial='hidden'
					animate='visible'
					variants={variants}
					key={count}
				>
					{count}
				</motion.h1>
				<Button
					onClick={onClickMinus}
					className={styles.minus}
					text='- Minus'
				/>
				<Button
					onClick={onClickPlus}
					className={styles.plus}
					text='Plus +'
				/>
			</div>
		</div>
	)
}
