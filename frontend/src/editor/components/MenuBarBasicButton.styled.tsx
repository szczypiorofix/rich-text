import styled from 'styled-components';

export const MenuBarBasicButtonStyled = styled.button`
    padding: 6px 12px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;

    &:hover {
        background-color: #e9e9e9;
    }

    &.is-active {
        background-color: #333;
        color: white;
        border-color: #333;
    }
`;
