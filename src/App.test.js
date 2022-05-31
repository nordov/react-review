import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders an h1', () => {
  const { getByText } =  render(<App />);
  const h1 = getByText(/David Odio/);
  expect(h1).toHaveTextContent( "David Odio" );

});
