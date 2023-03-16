import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    color:"white",
    borderRadius:"10px",
    background: 'black',
    opacity:'0.80',
    border: '1px solid white'
  },
  media: {
    color:"white",
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    color:"white",
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    color:"white",
    transform: 'rotate(180deg)',
  },
  cartContent: {
    color:"white",
    paddingTop: 0,
  },
  divider: {
    color:"white",
    margin: '20px 0',
  },
}));
