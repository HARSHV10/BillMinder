import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    color:"black",
    borderRadius:"10px",
    background: 'white',
    opacity:'0.80',
    border: '1px solid white'
  },
  media: {
    color:"black",
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    color:"black",
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    color:"black",
    transform: 'rotate(180deg)',
  },
  cartContent: {
    color:"black",
    paddingTop: 0,
  },
  divider: {
    color:"black",
    margin: '20px 0',
  },
}));
