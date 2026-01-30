import React, { useState } from 'react';

import TitleLabel from './components/tilelabel/TitleLabel';
import TiptapEditor from './editor/TiptapEditor';
import { DebugPreview } from './preview/DebugPreview';
import { DividerHr, SaveButton } from './App.styled';

interface PostData {
    title: string;
    content: string;
}

const defaultContent = '<p>Start writing your post here ...</p>';

function App(): React.JSX.Element {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>(defaultContent);

    const handleSave = () => {
        if (!title || !content) {
            alert('Fill post title and content!');
            return;
        }

        const payload: PostData = {
            title,
            content,
        };

        console.log('Payload for NestJS:', payload);
        alert('Data ready (see console for details)');
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
                        style={{
                            width: '100%',
                            padding: '8px',
                            fontSize: '16px',
                        }}
                        placeholder='Enter title...'
                    />
                </div>

                <TitleLabel boldTitle='Content:'></TitleLabel>

                <TiptapEditor onContentChange={(html) => setContent(html)} initialContent={content} />

                <div style={{ marginTop: '20px', textAlign: 'right' }}>
                    <SaveButton onClick={handleSave}>Zapisz Post</SaveButton>
                </div>

                <DividerHr />

                <DebugPreview title={title} content={content}></DebugPreview>
            </div>
        </div>
    );
}

export default App;
