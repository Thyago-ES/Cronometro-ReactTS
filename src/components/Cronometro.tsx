import { useEffect, useState } from "react";
import {
	Container,
	Number,
	NumberContainer,
	TwoDots,
	ContainerButtons,
	ControlButtons,
} from "./styles";

export function Cronometro() {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [intervalId, setIntervalId] = useState<number | null>(null);

	useEffect(() => {
		if (seconds === 60) {
			setMinutes((minutes) => minutes + 1);
			setSeconds(0);
		}
		if (minutes === 60) {
			setHours((hours) => hours + 1);
			setMinutes(0);
		}
	}, [seconds, minutes]);

	const startTimer = () => {
		if (intervalId) return;
		const id = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		setIntervalId(id);
	};

	const stopTimer = () => {
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	const resetTimer = () => {
		stopTimer();
		setHours(0);
		setMinutes(0);
		setSeconds(0);
	};

	const formatTime = (time: number): string => {
		if (time < 10) {
			return `0${time}`;
		}
		return `${time}`;
	};

	return (
		<Container>
			<NumberContainer>
				<Number>{formatTime(hours)}</Number>
				<TwoDots>:</TwoDots>
				<Number>{formatTime(minutes)}</Number>
				<TwoDots>:</TwoDots>
				<Number>{formatTime(seconds)}</Number>
			</NumberContainer>
			<ContainerButtons>
				<ControlButtons onClick={startTimer}>Iniciar</ControlButtons>
				<ControlButtons onClick={stopTimer}>Parar</ControlButtons>
				<ControlButtons onClick={resetTimer}>Reiniciar</ControlButtons>
			</ContainerButtons>
		</Container>
	);
}
