import React, { useState, useCallback }  from 'react';
import { Button, CardContent, CardHeader } from '@material-ui/core';

import { StateService } from '@uirouter/core';
import { Container, Card, CardTitle, CardActions, TextField } from './styles';
import api from '../../services/api';

function SignIn({ state }: { state: StateService }) {
  const [user, setUser] = useState<string>('');

  const handleUserChange = (event: React.ChangeEventHandler<HTMLInputElement>) => {
    // setUser(event.target.value);
  }

  const handleSubmit = useCallback(() => {
    api.get('/autenticacao.json', {
      params: {
        user
      }
    });

    state.go('angular');
  }, [user]);

  return (
    <Container>
      <Card>
        <CardContent>
          <CardHeader title={<CardTitle>Login</CardTitle>}/>
          <TextField name="user" label="Usuário" onChange={handleUserChange} />
        </CardContent>
        <CardActions>
          <Button type="button" variant="contained" onClick={handleSubmit} color="secondary">Login</Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default SignIn;
