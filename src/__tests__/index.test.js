import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Gravatar from './../index';

test("Gravatar component succesfully renders", () => {
    const component = TestUtils.renderIntoDocument(
        <Gravatar/>
    );
    const isRendered = TestUtils.isCompositeComponentWithType(component, Gravatar);
    expect( isRendered ).toBeTruthy();
});

