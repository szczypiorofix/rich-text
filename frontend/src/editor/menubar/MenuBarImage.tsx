import { RiImageFill } from 'react-icons/ri';

import React, { useCallback } from 'react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import MenuBarBasicButton from '../components/MenuBarBasicButton.tsx';
import type { BasicEditorProps } from '../types';

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
                    <MenuBarBasicButton onClick={addImage}>
                        <RiImageFill />
                    </MenuBarBasicButton>
                </div>
            </div>
        </ElementGroupHorizontal>
    );
};
