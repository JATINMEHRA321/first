import { createBoard } from '@wixc3/react-board';
import { Component4 } from '../../../components/component-4/component-4';

export default createBoard({
    name: 'Component4',
    Board: () => <Component4 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1601,
        windowWidth: 375,
        windowHeight: 667,
        canvasHeight: 1122
    }
});
