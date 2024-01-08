import { CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardMedia = styled(CardMedia)(() => ({
  width: '30%',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 'inherit',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(77, 36, 163, 0.5)',
    borderRadius: 'inherit',
    transition: 'opacity 0.5s, transform 0.5s',}
  }));
  
  export const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.04,
    transition: theme.transitions.create('opacity'),
  }));

