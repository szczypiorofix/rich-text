import React from 'react';

import TitleLabel from '../components/TitleLabel';

import { DebugPreviewContainer, PreviewCode } from './DebugPreview.styled';

export interface DebugPreviewProps {
    title: string;
    content: string;
}

export function DebugPreview(props: DebugPreviewProps): React.JSX.Element {
    return (
        <React.Fragment>
            <h3>Podgląd danych (Debug):</h3>
            <DebugPreviewContainer>
                <TitleLabel boldTitle='Tytuł:'>{props.title}</TitleLabel>
                <TitleLabel boldTitle='Treść (HTML):'></TitleLabel>
                <PreviewCode>{props.content}</PreviewCode>
            </DebugPreviewContainer>
        </React.Fragment>
    );
}
