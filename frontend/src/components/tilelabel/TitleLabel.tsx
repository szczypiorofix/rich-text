import { type ReactNode } from 'react';

import { TitleLabelStyled } from './TitleLabel.styled';

interface TitleLabelProps {
    children?: ReactNode;
    boldTitle?: string;
}

const TitleLabel = ({ children, boldTitle }: TitleLabelProps) => {
    const boldTitleFormatted: string = boldTitle ? boldTitle + ' ' : '';
    return (
        <TitleLabelStyled>
            <strong>{boldTitleFormatted}</strong>
            {children}
        </TitleLabelStyled>
    );
};

export default TitleLabel;
