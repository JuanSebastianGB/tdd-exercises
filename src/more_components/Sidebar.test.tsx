import { render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

it.concurrent('renders Sidebar', () => {
  const items = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];
  render(<Sidebar items={items} />);
  const anchors = screen.getAllByRole('navigation');
  expect(anchors).toHaveLength(2);
  expect(anchors[0].getAttribute('href')).toBe('/');
  expect(anchors[1].getAttribute('href')).toBe('/about');
  expect(anchors[0].getAttribute('href')).not.toBe(
    anchors[1].getAttribute('href')
  );
  expect(anchors[0].textContent).toBe('Home');
  expect(anchors[1].textContent).toBe('About');
});
