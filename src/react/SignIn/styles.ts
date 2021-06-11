import { Card as MuiCard, TextField as MuiTextField, CardActions as MuiCardActions } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  margin: 20px 0;
`;

export const Card = styled(MuiCard).attrs({
  raised: true,
  variant: 'outlined',
})`
  min-width: 320px;
`

export const CardTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const TextField = styled(MuiTextField).attrs({
  color: 'secondary',
})`
  width: 100%;
`

export const CardActions = styled(MuiCardActions)`
  display: flex;
  justify-content: center;
`