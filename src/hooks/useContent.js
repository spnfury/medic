import { useState, useEffect } from 'react';

const STORAGE_KEY = 'site-content';

export function useContent() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check localStorage first for admin overrides
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setContent(JSON.parse(stored));
                setLoading(false);
                return;
            } catch (e) {
                localStorage.removeItem(STORAGE_KEY);
            }
        }

        // Load from static JSON
        fetch('/content.json')
            .then((res) => res.json())
            .then((data) => {
                setContent(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error loading content:', err);
                setLoading(false);
            });
    }, []);

    const updateContent = (newContent) => {
        setContent(newContent);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent));
    };

    const resetContent = () => {
        localStorage.removeItem(STORAGE_KEY);
        setLoading(true);
        fetch('/content.json')
            .then((res) => res.json())
            .then((data) => {
                setContent(data);
                setLoading(false);
            });
    };

    return { content, loading, updateContent, resetContent };
}
