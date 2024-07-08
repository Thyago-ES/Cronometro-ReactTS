import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 80%;
`;

export const NumberContainer = styled.div`
	display: flex;
	gap: 50px;
	padding: 50px;
	margin-bottom: 50px;
	user-select: none;
`;

export const Number = styled.span`
	font-size: 14rem;
	font-weight: bold;
`;

export const TwoDots = styled.span`
	font-size: 14rem;
`;

export const ContainerButtons = styled.div`
	display: flex;
	gap: 30px;
`;

export const ControlButtons = styled.button`
	background-color: #fff;
	border: none;
	border-radius: 16px;

	color: #000;
	padding: 15px 30px;
	font-size: 1.3rem;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		background-color: #ddd;
	}
`;
