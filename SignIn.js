import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm() // Initialize useForm

  const [isSubmitting, setSubmitting] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  const onSubmit = async data => {
    setSubmitting(true)
    console.log(data)
    // Add your sign-in logic here
  }

  const toggleForm = () => {
    setIsSignUp(!isSignUp)
  }

  const styles = {
    signinContainer: {
      width: 500,
      height: 600,
      padding: 40,
      borderRadius: 25,
      border: '12px solid royalblue',
      boxShadow: '0 0 20px rgba(65, 105, 225, 0.5)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      color: 'royalblue',
      textAlign: 'center',
      margin: 'auto', // Center the container
      backdropFilter: 'blur(10px) brightness(1.2)', // Add blur effect
      animation: 'borderChange 5s infinite alternate' // Add animation
    },
    '@keyframes borderChange': {
      '0%': {
        borderColor: 'royalblue'
      },
      '100%': {
        borderColor: 'lightcoral' // Change to the desired color
      }
    },
    body: {
      backgroundImage: 'url("./goldeWave.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'royalblue',
      fontFamily: 'Georgia, serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      marginLeft: 880
    }
  }

  return (
    <div style={styles.body}>
      <div className="block glow" style={styles.signinContainer}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={toggleForm}
            className={isSignUp ? 'active' : ''}
            variant="contained"
            style={{
              width: '40%',
              padding: 12,
              margin: 10,
              borderRadius: 8,
              backgroundColor: isSignUp ? 'royalblue' : 'transparent',
              color: isSignUp ? 'black' : 'royalblue',
              marginTop: 10
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={toggleForm}
            className={!isSignUp ? 'active' : ''}
            variant="contained"
            style={{
              width: '40%',
              padding: 12,
              margin: 10,
              borderRadius: 8,
              borderColor: 'royalblue',
              borderWidth: '2px',
              backgroundColor: !isSignUp ? 'royalblue' : 'transparent',
              color: !isSignUp ? 'black' : 'royalblue',
              marginTop: 10
            }}
          >
            Sign In
          </Button>
        </div>
        <Typography variant="h4" style={{ color: 'royalblue', marginTop: 20 }}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            style={{
              display: 'block',
              marginBottom: 12,
              fontWeight: 'bold',
              color: 'royalblue',
              marginTop: 20
            }}
          >
            Email:
          </label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            style={{
              width: '100%',
              padding: 12,
              marginBottom: 20,
              boxSizing: 'border-box',
              border: '2px solid royalblue',
              borderRadius: 8,
              color: 'royalblue',
              backgroundColor: 'black',
              marginTop: 10
            }}
          />
          {errors.email && (
            <Typography style={{ color: 'royalblue', marginTop: 10 }}>
              {errors.email.message}
            </Typography>
          )}

          <label
            style={{
              display: 'block',
              marginBottom: 12,
              fontWeight: 'bold',
              color: 'royalblue'
            }}
          >
            Password:
          </label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            style={{
              width: '100%',
              padding: 12,
              marginBottom: 20,
              boxSizing: 'border-box',
              border: '2px solid royalblue',
              borderRadius: 8,
              color: 'royalblue',
              backgroundColor: 'black',
              marginTop: 10
            }}
          />
          {errors.password && (
            <Typography style={{ color: 'royalblue', marginTop: 10 }}>
              {errors.password.message}
            </Typography>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: '42%',
              padding: 16,
              backgroundColor: 'royalblue',
              borderRadius: 10,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              fontSize: 20,
              marginTop: 20
            }}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In >'}
          </button>
        </form>
        <Typography>
          {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
          <button
            onClick={toggleForm}
            style={{
              color: 'royalblue',
              textDecoration: 'underline',
              border: 'none',
              background: 'none'
            }}
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </Typography>
      </div>
    </div>
  )
}

export default SignIn
