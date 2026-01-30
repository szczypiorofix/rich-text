import React from 'react';
import { BubbleMenu } from '@tiptap/react/menus';

import { MenuBarButton, MenuBarContainer } from '../menubar/MenuBar.styled';
import type { BasicEditorProps } from '../types';

const TextBubbleMenu: React.FC<BasicEditorProps> = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <BubbleMenu editor={editor} options={{ placement: 'bottom', offset: 8, flip: true }}>
            <MenuBarContainer style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <MenuBarButton
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </MenuBarButton>

                <MenuBarButton
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </MenuBarButton>

                <MenuBarButton
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </MenuBarButton>
            </MenuBarContainer>
        </BubbleMenu>
    );
};

export default TextBubbleMenu;
