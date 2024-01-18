import { createBoard } from '@wixc3/react-board';
import { Div5 } from '../../../components/div-5/div-5';

export default createBoard({
    name: 'Div5',
    Board: () => <Div5 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1715,
        windowWidth: 1920,
        windowHeight: 1080
    }
});
