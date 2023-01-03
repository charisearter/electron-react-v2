import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<React.Fragment>Hello From React</React.Fragment>
	</React.StrictMode>
);
