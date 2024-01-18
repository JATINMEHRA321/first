import { createBoard } from '@wixc3/react-board';
import { Div3 } from '../../../components/div-3/div-3';

export default createBoard({
    name: 'Div3',
    Board: () => <Div3 />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1830,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 627
    }
});
