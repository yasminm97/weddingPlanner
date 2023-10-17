import { useState } from 'react';
import { Button, TextField, Stack, Typography } from '@mui/material';
import { primaryFontColor, secondayFontColor, bgCardColor } from '../assets/custom/colors'
import ProfilePicture from './ProfilePicture';

export default function ProfilePage({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState('');
  const [service, setService] = useState('');
  const [price, setPrice] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Implement the logic to save the user's profile changes (e.g., make an API call).
    // You can update the state variables and display a success message.
  };

  const handleSignOut = () => {
    // Implement the logic to sign out the user (e.g., clear authentication tokens).
    // You can navigate to the login page or perform any other necessary actions.
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight:'5vh' }}>
      <Typography variant="caption" fontWeight={'bold'} fontSize={'14pt'} color={secondayFontColor}>
        Welcome {firstName}
      </Typography>

      <ProfilePicture user={user} />

      <Stack spacing={2} style={{ width: '90vw', maxWidth: '400px' }}>
        <TextField
          label="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Searvice"
          onChange={(e) => setService(e.target.value)}
        />
        <TextField
          label="Price Range"
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
         variant="contained"
         sx={{
          height: '40px', 
          mt: 2,
          bgcolor: primaryFontColor,
          '&:hover':{
            bgcolor: bgCardColor,
            color:'white'
          }, }}
          disableElevation
          onClick={handleSave}>Save</Button>
          <Button
          variant="contained"
          sx={{
            height: '40px', 
            mt: 2,
            bgcolor: primaryFontColor,
            '&:hover':{
              bgcolor: bgCardColor,
              color:'white'
            }, }}
          disableElevation
          onClick={handleSignOut}>Sign Out</Button>
      </Stack>
    </div>
  );
}
