import styled from "styled-components"

const WidgetHeader = styled.div`
	min-height: 60px;
	max-height: 60px;
	max-width: 100%;
	width: 100%;
	padding-left: 16px;
	margin: 0 0 8px 0;
	display: flex;
	flex-direction: row;
    justify-content: space-between;
	align-items: center;
	background-color: #c4c4c4;
	border-bottom: 1px solid #121212;
	
	h5 {
        width: 100%;
		text-align: left;
		font-weight: bold;
		margin: 0 auto;
	}

	img {
		margin-right: 16px;
	}

	.fas {
		transform: scale(3);
	}
`

export { WidgetHeader }
