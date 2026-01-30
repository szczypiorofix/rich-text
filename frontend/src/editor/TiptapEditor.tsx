import React from 'react';
import { Table } from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyleKit } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import TextBubbleMenu from './bubblemenu/TextBubbleMenu';
import MenuBar from './menubar/MenuBar';
import { EditorContainer } from './TipTapEditor.styled';

interface TiptapEditorProps {
    onContentChange: (content: string) => void;
    initialContent?: string;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ onContentChange, initialContent }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextStyleKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: initialContent,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            onContentChange(html);
        },
    });

    return (
        <EditorContainer>
            <MenuBar editor={editor} />

            <TextBubbleMenu editor={editor} />

            <EditorContent editor={editor} />
        </EditorContainer>
    );
};

export default TiptapEditor;
