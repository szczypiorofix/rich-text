import React from 'react';
import { BubbleMenu } from '@tiptap/react/menus';

import MenuBarBasicButton from '../components/MenuBarBasicButton.tsx';
import { MenuBarContainer } from '../menubar/MenuBar.styled';
import type { BasicEditorProps } from '../types';

const TextBubbleMenu: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <BubbleMenu editor={editor} options={{ placement: 'bottom', offset: 8, flip: true }}>
            <MenuBarContainer style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <MenuBarBasicButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </MenuBarBasicButton>

                <MenuBarBasicButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </MenuBarBasicButton>

                <MenuBarBasicButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </MenuBarBasicButton>
            </MenuBarContainer>
        </BubbleMenu>
    );
};

export default TextBubbleMenu;
