import { createBoard } from '@wixc3/react-board';
import { Div2 } from '../../../components/div-2/div-2';

export default createBoard({
    name: 'Div2',
    Board: () => <Div2 />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 1320,
        canvasWidth: 1717
    }
});
