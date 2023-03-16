import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    borderRadius:"50px",
    background: 'linear-gradient(#e66465, #9198e5)',
    opacity:'0.80'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  cartContent: {
    paddingTop: 0,
  },
  divider: {
    margin: '20px 0',
  },
}));
