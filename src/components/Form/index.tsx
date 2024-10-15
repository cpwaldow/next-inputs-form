import { Container, Title, FormStyle } from './style';
import { Button, Input } from '@mui/material';

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
        <input
          placeholder='CEP'
          type='text'
          inputMode='numeric'
          pattern='[0-9]*'
        />
        <input
          placeholder='Cartão de crédito'
          type='text'
          inputMode='numeric'
        />
        <Button variant='contained'>teste</Button>
      </form>
    </div>
  );
};

export default Form;
