import { createBoard } from '@wixc3/react-board';
import { Component1 } from '../../../components/component-1/component-1';

export default createBoard({
    name: 'Component1',
    Board: () => <Component1 />,
    isSnippet: true,
});
