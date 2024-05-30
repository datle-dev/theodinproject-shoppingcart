import { render, screen } from '@testing-library/react';
import Root from './Root';
import { MemoryRouter } from 'react-router-dom';

describe("Root component", () => {
  it("renders navbar component", () => {
    render(
      <MemoryRouter>
        <Root />
      </MemoryRouter>
    );
    screen.debug();
  })
})
