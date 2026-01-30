import { RiImageFill } from 'react-icons/ri';

import React, { useCallback } from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import type { BasicEditorProps } from '../types';

import { MenuBarButton } from './MenuBar.styled';

export const MenuBarImage: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    const addImage = useCallback(() => {
        const url = window.prompt('URL');

        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    return (
        <ElementGroupHorizontal>
            <div className='control-group'>
                <div className='button-group'>
                    <MenuBarButton onClick={addImage}>
                        <RiImageFill />
                    </MenuBarButton>
                </div>
            </div>
        </ElementGroupHorizontal>
    );
};
