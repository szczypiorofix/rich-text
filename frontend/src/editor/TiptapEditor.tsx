import React, { useMemo } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';

import TextBubbleMenu from './bubblemenu/TextBubbleMenu';
import { getEditorExtensions } from './config/editorExtensions.ts';
import MenuBar from './menubar/MenuBar';
import { EditorContainer } from './TipTapEditor.styled';

interface TiptapEditorProps {
    onContentChange: (content: string) => void;
    initialContent?: string;
}

export function TiptapEditor(props: TiptapEditorProps): React.JSX.Element {
    const extensions = useMemo(() => getEditorExtensions(), []);

    const editor = useEditor({
        extensions: extensions,
        content: props.initialContent,
        onUpdate: ({ editor }) => {
            const html = editor.getHTML();
            props.onContentChange(html);
        },
    });

    return (
        <EditorContainer>
            <MenuBar editor={editor} />

            <TextBubbleMenu editor={editor} />

            <EditorContent editor={editor} />
        </EditorContainer>
    );
}
