/* eslint-env jest/globals */
import React from 'react';
import renderer from 'react-test-renderer';
import { CurrencyView } from '../CurrencyView';

it('renders correctly', () => {
    const tree = renderer.create(<CurrencyView
        loading={false}
        update={() => {
        }}
    />).toJSON();
    expect(tree).toMatchSnapshot();
});