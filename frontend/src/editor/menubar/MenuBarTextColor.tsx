import React from 'react';
import { useEditorState } from '@tiptap/react';

import { ElementGroupHorizontal } from '../../components/ElementsGroup.styled';
import MenuBarBasicButton from '../components/MenuBarBasicButton.tsx';
import type { BasicEditorProps } from '../types';

interface ColorPreset {
    color: string;
    label: string;
}

const PRESET_COLORS: ColorPreset[] = [
    { color: '#958DF1', label: 'Purple' },
    { color: '#F98181', label: 'Red' },
    { color: '#FBBC88', label: 'Orange' },
    { color: '#FAF594', label: 'Yellow' },
    { color: '#70CFF8', label: 'Blue' },
    { color: '#94FADB', label: 'Teal' },
    { color: '#B9F18D', label: 'Green' },
];

export const MenuBarTextColor: React.FC<BasicEditorProps> = ({ editor }) => {
    const editorState = useEditorState({
        editor,
        selector: (ctx) => {
            if (!ctx.editor) {
                return { currentColor: undefined };
            }
            return {
                currentColor: ctx.editor.getAttributes('textStyle').color as string | undefined,
            };
        },
    });

    if (!editor) {
        return null;
    }

    const currentColorValue = editorState?.currentColor || '#000000';

    return (
        <ElementGroupHorizontal>
            <input
                type='color'
                onInput={(event) => editor.chain().focus().setColor(event.currentTarget.value).run()}
                value={currentColorValue}
                data-testid='setColor'
                style={{
                    cursor: 'pointer',
                    height: '32px',
                    width: '40px',
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                }}
            />

            {PRESET_COLORS.map((preset) => (
                <MenuBarBasicButton
                    key={preset.color}
                    onClick={() => editor.chain().focus().setColor(preset.color).run()}
                    className={editor.isActive('textStyle', { color: preset.color }) ? 'is-active' : ''}
                    data-testid={`set${preset.label}`}
                    style={{ color: preset.color }}
                >
                    {preset.label}
                </MenuBarBasicButton>
            ))}

            <MenuBarBasicButton
                onClick={() => editor.chain().focus().unsetColor().run()}
                data-testid='unsetColor'
                disabled={!editorState?.currentColor}
            >
                Unset color
            </MenuBarBasicButton>
        </ElementGroupHorizontal>
    );
};
