import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App'; // Import your App component
import Provider from '../QueryProvider';

describe('App Component', () => {
  it('renders without errors', () => {
    render(
      <Provider>
        <App />
      </Provider>
    );
    const headingElement = screen.getByText('search movies and TV shows');
    const inputElement = screen.getByPlaceholderText('enter movie name');

    expect(headingElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it('updates search input value on user input', () => {
    render(
      <Provider>
        <App />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('enter movie name');

    fireEvent.change(inputElement, { target: { value: 'Avengers' } });

    expect(inputElement).toHaveValue('Avengers');
  });

  // Add more tests as needed for your specific requirements
});
