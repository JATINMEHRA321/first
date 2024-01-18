import { createBoard } from '@wixc3/react-board';
import { Component6 } from '../../../components/component-6/component-6';

export default createBoard({
    name: 'Component6',
    Board: () => <Component6 />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1356,
        windowHeight: 1068,
        canvasWidth: 1445,
        canvasHeight: 1066
    }
});
