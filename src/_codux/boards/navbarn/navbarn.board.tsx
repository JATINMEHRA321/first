import { createBoard } from '@wixc3/react-board';
import { Navbarn } from '../../../components/navbarn/navbarn';

export default createBoard({
    name: 'Navbarn',
    Board: () => <Navbarn />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1007,
        canvasHeight: 744,
        windowWidth: 1042
    }
});
