import React from "react"
import { WidgetHeader } from "./GlobalComponents"
import { KanBanSection } from "./StyledComponents"


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
