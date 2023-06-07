import Profile from '../Profile'
import React from 'react'

import ShowProfile from '../../features/showProfile/component/ShowProfile';
import TestRenderer, { act } from 'react-test-renderer';

 test('should render profile page',async () => {
    let testRenderer
    await act(()=>{
         testRenderer = TestRenderer.create(
            <Profile/>
        );
    })
    
    const testInstance = testRenderer.root;
    testInstance.findByType(ShowProfile);

    expect(testInstance.findAllByType('button')).toBeTruthy()
 })