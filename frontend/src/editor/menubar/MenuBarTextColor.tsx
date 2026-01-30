import React from 'react';
import { useEditorState } from '@tiptap/react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import type { BasicEditorProps } from '../types';

import { MenuBarButton } from './MenuBar.styled';

export const MenuBarTextColor: React.FC<BasicEditorProps> = ({ editor }) => {
    const editorState = useEditorState({
        editor,
        selector: (ctx) => {
            if (!ctx.editor) {
                return null;
            }
            return {
                color: ctx.editor.getAttributes('textStyle').color,
                isPurple: ctx.editor.isActive('textStyle', { color: '#958DF1' }),
                isRed: ctx.editor.isActive('textStyle', { color: '#F98181' }),
                isOrange: ctx.editor.isActive('textStyle', { color: '#FBBC88' }),
                isYellow: ctx.editor.isActive('textStyle', { color: '#FAF594' }),
                isBlue: ctx.editor.isActive('textStyle', { color: '#70CFF8' }),
                isTeal: ctx.editor.isActive('textStyle', { color: '#94FADB' }),
                isGreen: ctx.editor.isActive('textStyle', { color: '#B9F18D' }),
            };
        },
    });

    if (!editor || !editorState) {
        return null;
    }

    return (
        <ElementGroupHorizontal>
            <input
                type='color'
                onInput={(event) => editor.chain().focus().setColor(event.currentTarget.value).run()}
                value={editorState.color}
                data-testid='setColor'
            />
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                className={editorState.isPurple ? 'is-active' : ''}
                data-testid='setPurple'
            >
                Purple
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#F98181').run()}
                className={editorState.isRed ? 'is-active' : ''}
                data-testid='setRed'
            >
                Red
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
                className={editorState.isOrange ? 'is-active' : ''}
                data-testid='setOrange'
            >
                Orange
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#FAF594').run()}
                className={editorState.isYellow ? 'is-active' : ''}
                data-testid='setYellow'
            >
                Yellow
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
                className={editorState.isBlue ? 'is-active' : ''}
                data-testid='setBlue'
            >
                Blue
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#94FADB').run()}
                className={editorState.isTeal ? 'is-active' : ''}
                data-testid='setTeal'
            >
                Teal
            </MenuBarButton>
            <MenuBarButton
                onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
                className={editorState.isGreen ? 'is-active' : ''}
                data-testid='setGreen'
            >
                Green
            </MenuBarButton>
            <MenuBarButton onClick={() => editor.chain().focus().unsetColor().run()} data-testid='unsetColor'>
                Unset color
            </MenuBarButton>
        </ElementGroupHorizontal>
    );
};
