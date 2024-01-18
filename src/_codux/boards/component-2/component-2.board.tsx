import { createBoard } from '@wixc3/react-board';
import { Component2 } from '../../../components/component-2/component-2';

export default createBoard({
    name: 'Component2',
    Board: () => <Component2 />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1196,
        windowHeight: 667,
        canvasWidth: 395,
        canvasHeight: 1026
    }
});
