import { createBoard } from '@wixc3/react-board';
import { Component5 } from '../../../components/component-5/component-5';

export default createBoard({
    name: 'Component5',
    Board: () => <Component5 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1610,
        canvasHeight: 1141,
        windowWidth: 1458,
        windowHeight: 1129
    }
});
