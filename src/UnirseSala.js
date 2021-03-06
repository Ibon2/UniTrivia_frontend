import React,{useState} from 'react'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
//import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@material-ui/core/TextField';

const But=styled.button`
  background-color: #fce2e2;
  font-size: 32px;
  color: #6c6ce3;
`;

const Div=styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 150%;
margin: 2em auto;

  @media screen and (min-width: 1180px) {
    width: 70%;
  }
`;

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://img.freepik.com/vector-gratis/modelo-inconsutil-pregunta-papel-aislada-realista-decoracion-invitacion-concepto-concurso-trivia_269299-1004.jpg?size=626&ext=jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function UnirseSala() {
    const classes = useStyles();
    const codigo = useFormInput('');
    return (
        <Div>
            <h3>Unirse a Sala</h3>
            Introduce el código de la sala<br/><br/>
            <div>
            <div>
            <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="codigo"
                          label="Codigo"
                          name="codigo"
                          autoComplete="codigo"
                          autoFocus
                          {...codigo}
                          label="Código de la sala"
                      />
            </div>
            </div>
            <div style={{marginTop: 10}}>
            <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    href={'/Sala'}
                >
                    Unirme
                </Button>
            </div>
            <div style={{marginTop: 100}}>
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    href={'/Play'}
                >
                    Atrás
                </Button>
            </div>
        </Div>
    );
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
    console.log(value)
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }
export default UnirseSala;
