import { createBoard } from '@wixc3/react-board';
import { Imagediv } from '../../../components/imagediv/imagediv';

export default createBoard({
    name: 'Imagediv',
    Board: () => <Imagediv />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1085,
        windowWidth: 1834,
        windowHeight: 855
    }
});
