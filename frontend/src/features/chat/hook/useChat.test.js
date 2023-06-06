import { renderHook } from '@testing-library/react';
import useChat from './useChat';
import chatData from '../../../data/chat.json';

test('should load chat data correctly', () => {
    const { result } = renderHook(() => useChat());
    expect(result.current).toEqual(chatData);
});