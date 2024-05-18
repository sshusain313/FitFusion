import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CalculateBmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
    toast.error('Please enter a valid weight and height!', {
      position: toast.POSITION.TOP_RIGHT,
    });
     
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage('You are underweight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  const reloadBmi = () => {
    window.location.reload();
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      mt="37px"
      p="20px"
      id="bmi"
      sx={{ mt: { lg: '212px', xs: '70px' } }}
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Calculate Your BMI
      </Typography>
      <Box className="bmi-card">
        <form onSubmit={calcBmi}>
          <Box>
            <label>Weight (lbs)</label>
            <input
              className="bmi-card-input"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Box>
          <Box>
            <label>Height (in)</label>
            <input
              className="bmi-card-input"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Box>
          <Box>
            <button
              type="submit"
              className="bmi-card-btn"
            >
              Submit
            </button>
            <ToastContainer />
            <button
              type="submit"
              className="bmi-card-btn bmi-card-btn-outline"
              onClick={reloadBmi}
            >
              Reload
            </button>
          </Box>
        </form>
        <Box>
          <Typography variant="h5">Your BMI is: {bmi}</Typography>
          <p>{message}</p>
        </Box>
      </Box>
    </Stack>
  );
};

export default CalculateBmi;
