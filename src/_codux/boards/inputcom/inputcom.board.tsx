import { createBoard } from '@wixc3/react-board';
import { Inputcom } from '../../../components/inputcom/inputcom';

export default createBoard({
    name: 'Inputcom',
    Board: () => <Inputcom />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1575,
        windowHeight: 778,
        windowWidth: 1920,
        canvasHeight: 2288
    }
});
