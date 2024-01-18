import { createBoard } from '@wixc3/react-board';
import { Component3 } from '../../../components/component-3/component-3';

export default createBoard({
    name: 'Component3',
    Board: () => <Component3 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1177,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
