import { BrowserRouter as Router, Routes } from 'react-router';
import { AuthProvider } from './contexts/authcontext';

function App() {
	return (
		<AuthProvider>
			<Router>
				<div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
					<Routes></Routes>
				</div>
			</Router>
		</AuthProvider>
	);
}

export default App;
