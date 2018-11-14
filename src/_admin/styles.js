const drawerWidth = 240;
export const home_styles = theme => ({
	root: {
		flexGrow: 1,
	},
	appFrame: {
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	appBar: {
		// 'background-color':'#606060',
		position: 'absolute',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'appBarShift-left': {
		marginLeft: drawerWidth,
	},
	'appBarShift-right': {
		marginRight: drawerWidth,
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	'content-left': {
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'contentShift-left': {
		marginLeft: 0,
	},
});


export const login_styles = theme => ({
	container:{
		display:'flex',
		'flex-direction':'column',
		'align-items':'center'
	},
	paper_container:{
		width:'40vw',
		'margin-top':'2%',	
	},
	paper: {
		width:'40vw',
		'margin-top':'2%',
		...theme.mixins.gutters(),
		padding:'2%'
		
	},
	error:{
		'background-color':'#FA4646',
		'color':'#7D0606',
		'font-weight':'bold'
	},
	error_visibility:{
		visibility:'hidden'
	},
	content:{
		'align-content':'center',
		'align-text':'center'
	}
	
});
