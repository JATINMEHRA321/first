import { createBoard } from '@wixc3/react-board';
import { Div6 } from '../../../components/div-6/div-6';

export default createBoard({
    name: 'Div6',
    Board: () => <Div6 />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1998
    }
});
