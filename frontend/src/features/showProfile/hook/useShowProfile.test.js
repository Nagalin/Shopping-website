import { renderHook } from '@testing-library/react';
import profileData from '../../../data/profile.json';
import useProfile from './useProfile';

test('should load profile data correctly', () => {
    const { result } = renderHook(() => useProfile());
    expect(result.current).toEqual(profileData);
});