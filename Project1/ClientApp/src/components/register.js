
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect, useRef } from 'react';

export const Register = () => {
    const refContainer2 = useRef();
    const refContainer = useRef();
    function handleSubmit(e) {
        e.preventDefault();
       
        console.log(refContainer.current.value);
        window.location.href = "/budget?money=" + refContainer.current.value + "&ppl=" + refContainer2.current.value
        console.log(refContainer2.current.value);
    }
  return (
    <>
    
     
      <Box
        component="main"
        sx={{
            alignItems: 'center',
            justifyContent: 'center',
          display: 'flex',
            height: '100vh',
          
        }}
      >
              <Container maxWidth="sm" sx={{ backgroundColor: '#EDF1E4', borderRadius: 5, color: "black"}}>
     
            <Box sx={{ my: 3 }}>
              <Typography
                          color="black"
                          variant="h6"
                          textAlign="center"
                        
              >
                ENTER YOUR BUDGET
              </Typography>
         
            </Box>
            <TextField
                  
                      fullWidth
                      inputRef={refContainer}
              label="Budget For the Week"
              margin="normal"
              name="password"
                id="money"
                      sx={{
                          color: "white"}}
           
              variant="outlined"
            />
            <TextField
                     
              fullWidth
                      sx={{
                          color: "white"
                      }}
              label="How Many Mouths To Feed"
              margin="normal"
              name="password"
                      inputRef={refContainer2}
           id="kids"
            
           
              variant="outlined"
            />
            
          
            <Box sx={{ py: 2 }}>
              <Button
                          style={{
                           
                              backgroundColor: "#1C77C3",
                         
                          }}

                          fullWidth
                          size="large"
                          type="submit"
                          variant="contained"
                          onClick={handleSubmit}
              >
                Calculate
              </Button>
            </Box>
            
        
        </Container>
      </Box>
    </>
  );
};

export default Register;
