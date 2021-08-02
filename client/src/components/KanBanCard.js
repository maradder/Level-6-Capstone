import React from "react"
import styled from "styled-components"
import { WidgetHeader } from "./GlobalComponents"

const KanBanSection = styled.div`
	height: 40vh;
	min-height: fit-content;
	min-width: 20%;
    max-width: fit-content;
	border: 1px solid #121212;
	border-radius: 8px;
	background-color: #f3f6f9;
	display: flex;
	flex-direction: column;
	justify-content: inherit;
    align-items: center;
	overflow-y: scroll;

		img {
		max-height: 32px;
		min-height: 32px;
		width: auto;
		margin: 0;
	}
`
function KanBanCard(props) {
	return (
		<KanBanSection>
			<WidgetHeader>
				<h5 className="cardTitle">{props.cardTitle}</h5>
				{props.add}
			</WidgetHeader>
			{props.children}
		</KanBanSection>
	)
}

export default KanBanCard
