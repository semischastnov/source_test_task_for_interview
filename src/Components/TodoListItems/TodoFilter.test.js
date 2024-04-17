import { render, fireEvent } from '@testing-library/react';
import TodoFilter from './TodoFilter';

describe('TodoFilter component', () => {
    it('renders properly', () => {
        const { getByText } = render(<TodoFilter />);

        expect(getByText('items left')).toBeInTheDocument();
        expect(getByText('All')).toBeInTheDocument();
        expect(getByText('Active')).toBeInTheDocument();
        expect(getByText('Completed')).toBeInTheDocument();
        expect(getByText('Clear completed')).toBeInTheDocument();
    });

    it('calls filterAll function when All button is clicked', () => {
        const filterAll = jest.fn();
        const { getByText } = render(<TodoFilter filterAll={filterAll} />);

        fireEvent.click(getByText('All'));
        expect(filterAll).toBeCalled();
    });

    it('calls filterActive function when Active button is clicked', () => {
        const filterActive = jest.fn();
        const { getByText } = render(<TodoFilter filterActive={filterActive} />);

        fireEvent.click(getByText('Active'));
        expect(filterActive).toBeCalled();
    });

    it('calls filterCompleted function when Completed button is clicked', () => {
        const filterCompleted = jest.fn();
        const { getByText } = render(<TodoFilter filterCompleted={filterCompleted} />);

        fireEvent.click(getByText('Completed'));
        expect(filterCompleted).toBeCalled();
    });

    it('calls clearCompleted function when Clear completed button is clicked', () => {
        const clearCompleted = jest.fn();
        const { getByText } = render(<TodoFilter clearCompleted={clearCompleted} />);

        fireEvent.click(getByText('Clear completed'));
        expect(clearCompleted).toBeCalled();
    });
});