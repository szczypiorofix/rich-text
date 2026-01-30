import React from 'react';

import TitleLabel from '../components/tilelabel/TitleLabel';

import { DebugPreviewContainer, PreviewCode } from './DebugPreview.styled';

export interface DebugPreviewProps {
    title: string;
    content: string;
}

export function DebugPreview(props: DebugPreviewProps): React.JSX.Element {
    return (
        <React.Fragment>
            <h3>Preview (Debug):</h3>
            <DebugPreviewContainer>
                <TitleLabel boldTitle='Title:'>{props.title}</TitleLabel>
                <TitleLabel boldTitle='Content (HTML):'></TitleLabel>
                <PreviewCode>{props.content}</PreviewCode>
            </DebugPreviewContainer>
        </React.Fragment>
    );
}
