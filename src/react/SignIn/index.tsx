import React, { useState, useCallback } from 'react';
import { Button, CardContent, CardHeader, ThemeProvider } from '@material-ui/core';

import { StateService } from '@uirouter/core';
import { Container, Card, CardTitle, CardActions, TextField } from './styles';
import api from '../../services/api';
import { reactFractalTheme } from '../../themes';

function SignIn({ state }: { state: StateService }) {
  const [user, setUser] = useState<string>('');

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  }

  const handleSubmit = useCallback(async () => {
    const { data } = await api.get('/autenticacao.json', {
      params: {
        user
      }
    });

    localStorage.setItem('config', JSON.stringify(data));

    state.go('menu.maps');
  }, [user]);

  return (
    <ThemeProvider theme={reactFractalTheme}>
      <Container>
        <Card>
          <CardContent>
            <CardHeader title={<CardTitle>Login</CardTitle>} />
            <TextField name="user" label="Usuário" onChange={handleUserChange} />
          </CardContent>
          <CardActions>
            <Button type="button" variant="contained" onClick={handleSubmit} color="secondary">Login</Button>
          </CardActions>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
