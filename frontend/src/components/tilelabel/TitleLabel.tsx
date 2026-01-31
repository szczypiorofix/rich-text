import React from 'react';

import { TitleLabelStyled } from './TitleLabel.styled';

interface TitleLabelProps extends React.PropsWithChildren {
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
