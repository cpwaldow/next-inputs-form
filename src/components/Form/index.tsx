import { Container, Title, FormStyle } from './style';
import { Button, Input, TextField } from '@mui/material';

const Form = () => {
  return (
    <div style={Container}>
      <h2 style={Title}>Teste de formulário</h2>
      <form style={FormStyle}>
        <Input
          placeholder='Nome'
          disableUnderline
          type='text'
          sx={{ border: '1px solid black', p: 1 }}
        />
        <Input
          placeholder='Email'
          disableUnderline
          type='email'
          sx={{ border: '1px solid black', p: 1 }}
          inputMode='email'
        />
        <Input
          placeholder='Telefone'
          disableUnderline
          type='tel'
          sx={{ border: '1px solid black', p: 1 }}
        />
        <Input
          placeholder='CEP'
          type='text'
          inputMode='numeric'
          inputProps={{ pattern: '[0-9]*' }}
          sx={{ border: '1px solid black', p: 1 }}
        />
        <Input
          placeholder='Cartão de crédito'
          type='text'
          inputProps={{ pattern: '[0-9]*' }}
          sx={{ border: '1px solid black', p: 1 }}
        />
        <Button variant='contained'>teste</Button>
      </form>
    </div>
  );
};

export default Form;
