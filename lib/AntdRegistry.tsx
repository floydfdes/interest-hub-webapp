'use client';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useTheme } from '@/app/hooks/useTheme';
import { App, ConfigProvider, theme as antdTheme } from 'antd';
import { useServerInsertedHTML } from 'next/navigation';
import React from 'react';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    const theme = useTheme();
    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    ));
    return (
        <StyleProvider cache={cache}>
            <ConfigProvider
                theme={{
                    algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
                    token: {
                        colorPrimary: '#00AA6B',
                        colorInfo: '#00AA6B',
                        colorText: theme === 'dark' ? '#EFFAF3' : '#082B27',
                        colorTextSecondary: theme === 'dark' ? '#A7B9B3' : '#5f756f',
                        colorBgContainer: theme === 'dark' ? '#082B27' : '#F7F7F2',
                        colorBorder: theme === 'dark' ? '#164A42' : '#cfe8d8',
                        borderRadius: 12,
                        borderRadiusLG: 18,
                        controlHeightLG: 48,
                        fontFamily: 'var(--font-inter), "Avenir Next", Arial, sans-serif',
                    },
                }}
            >
                <App>
                    {children}
                </App>
            </ConfigProvider>
        </StyleProvider>
    );
};

export default StyledComponentsRegistry;
