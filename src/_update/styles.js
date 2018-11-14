
export const update_styles = (theme) => ({
	console:{
		'background-color':'black',
		'height':'40vh',
		'max-width':'100%',
		'overflow-y':'scroll'
	},
	console_text:{
		'color':'green',
		'font-family': 'Roboto, "Lucida Console", Monaco, monospace',
		'text-align':' left',
	},
	row_container:{
		display:'flex',
		'flex-direction':'row',
	},

	paper: {
		width:'20vw',
		'margin-top':'2%',
		'margin-left':'2%',
		padding:'2%',
		...theme.mixins.gutters(),
		
	},
});