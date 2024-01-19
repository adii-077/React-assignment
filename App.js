import React from 'react';
import { useForm, Controller } from 'react-hook-form';

function RegistrationForm() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Registration data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <input
                {...field}
                id="firstName"
                placeholder="Enter your first name"
              />
              {errors.firstName && <span className="error">First name is required</span>}
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <input
                {...field}
                id="lastName"
                placeholder="Enter your last name"
              />
              {errors.lastName && <span className="error">Last name is required</span>}
            </>
          )}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <input
                type="email"
                {...field}
                id="email"
                placeholder="Enter your email"
              />
              {errors.email && <span className="error">Invalid email address</span>}
            </>
          )}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
