import styled from 'styled-components';

export const MenuBarDivider = styled.div`
    width: 1px;
    background: #ddd;
    margin: 0 5px;
`;

export const MenuBarContainer = styled.div`
    background-color: #f4f4f4;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
`;

export const MenuBarButton = styled.button`
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
