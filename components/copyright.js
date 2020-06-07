import MLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

 export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MLink color="inherit" href="#">
        InstaKash
      </MLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
