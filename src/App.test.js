import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio identity and primary work link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /connor russi/i })).toBeInTheDocument();
  expect(screen.getByText(/b\.s\. computer science/i)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /see my work/i })).toHaveAttribute('href', '#projects');
});
