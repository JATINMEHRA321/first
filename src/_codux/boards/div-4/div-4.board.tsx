import { createBoard } from '@wixc3/react-board';
import { Div4 } from '../../../components/div-4/div-4';

export default createBoard({
    name: 'Div4',
    Board: () => <Div4 />,
    isSnippet: true,
});
