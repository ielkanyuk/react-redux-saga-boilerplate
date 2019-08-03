/* eslint-env jest/globals */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Counter } from '../Counter';

it('renders correctly', () => {
    const tree = renderer.create(
        <MemoryRouter>
            <Counter
                decrement={() => {}}
                increment={() => {}}
            />
        </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
});