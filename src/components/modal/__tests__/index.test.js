import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from "@testing-library/react";
import Modal from '..';
const mockToggleModal = jest.fn()

const currentPhoto = {
    name: 'park bench',
    category: 'landscape',
    description: 'lorem',
    index: 1
}

afterEach(cleanup)

describe('Modal component', () => {
    it('renders', () => {
        render(<Modal 
        onClose={mockToggleModal}
        currentPhoto={currentPhoto}
        />);
    })
    if('matches snapshot DOM node structure', () => {
        const {asFragment}= render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const{getByText} = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />)
            fireEvent.click(getByText('Close this modal'))
            expect(mockToggleModal).toHaveBeenCalledTimes(1)
    });
})