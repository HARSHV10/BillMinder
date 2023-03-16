import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  income: {
    borderRadius:'50px',
    background: 'linear-gradient(#e66465, #9198e5)',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    opacity:'0.80',
    boxShadow: "3px 3px 3px 3px white"
  },
  expense: {
    borderRadius:'50px',
    background: 'linear-gradient(#e66465, #9198e5)',
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    opacity:'0.80',
    boxShadow: "3px 3px 3px 3px white"
  },
}));
