import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import APIComponent from './APIComponent';

const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'John' }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it.concurrent(' APIComponent test', async () => {
  render(<APIComponent />);

  const term = await waitFor(() => screen.getByRole('contentinfo'));

  expect(term.textContent).toBe('Name is John');
});
