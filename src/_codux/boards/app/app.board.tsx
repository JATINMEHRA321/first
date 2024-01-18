import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowBackgroundColor: '#ffffff',
        canvasBackgroundColor: 'rgba(74, 170, 163, 0.03)',
        windowHeight: 851,
        canvasWidth: 1532,
        windowWidth: 960,
        canvasPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
        canvasMargin: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }
    },
    isSnippet: true
});
