import React, { useState } from 'react';

import TitleLabel from './components/tilelabel/TitleLabel';
import { TiptapEditor } from './editor/TiptapEditor';
import { DebugPreview } from './components/preview/DebugPreview';
import { DividerHr, SaveButton } from './App.styled';
import { pb } from './services';

interface PostData {
    title: string;
    content: string;
}

const defaultContent = '<p>Start writing your post here ...</p>';

function App(): React.JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>(defaultContent);

    const [isSaving, setIsSaving] = useState<boolean>(false);

    const handleSave = async () => {
        if (!title || !content) {
            alert('Fill post title and content!');
            return;
        }

        setIsSaving(true);

        try {
            const payload: PostData = {
                title,
                content,
            };

            const record = await pb.collection('Post').create(payload);

            console.log('Saved record:', record);
            alert(`Post saved successfully! ID: ${record.id}`);
        } catch (error: unknown) {
            console.error('Error saving post:', error);
            if (typeof error == 'string') {
                alert(`Error: ${error}`);
            } else if (error instanceof Error) {
                alert(`Error: ${error.message || 'Something went wrong'}`);
            }
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1>PoC CMS</h1>
                <div style={{ marginBottom: '15px' }}>
                    <TitleLabel boldTitle='Post title'></TitleLabel>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        disabled={isSaving}
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                            opacity: isSaving ? 0.7 : 1,
                        }}
                        placeholder='Enter title...'
                    />
                </div>

                <TitleLabel boldTitle='Content:'></TitleLabel>

                <TiptapEditor onContentChange={(html) => setContent(html)} initialContent={content} />

                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <SaveButton
                        onClick={() => {
                            handleSave()
                                .then((r) => console.log(r ?? 'empty return.'))
                                .catch((err) => console.error(err));
                        }}
                        disabled={isSaving}
                        style={{ cursor: isSaving ? 'not-allowed' : 'pointer', opacity: isSaving ? 0.7 : 1 }}
                    >
                        {isSaving ? 'Saving...' : 'Save post'}
                    </SaveButton>
                </div>

                <DividerHr />

                <DebugPreview title={title} content={content}></DebugPreview>
            </div>
        </div>
    );
}

export default App;
