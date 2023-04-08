import { useState } from 'react';

interface Props {
  submit?: ({}) => {};
}

const Form: React.FC<Props> = ({ submit }) => {
  const [formValues, setFormValues] = useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submit) submit(formValues);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setFormValues({ ...formValues, [target.id]: target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={formValues.username}
        onChange={handleChange}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={formValues.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
};
export default Form;
