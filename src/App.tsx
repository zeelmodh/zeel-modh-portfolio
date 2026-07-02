import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { TechStack } from './pages/TechStack';
import { Architecture } from './pages/Architecture';
import { Leadership } from './pages/Leadership';
import { AIWorkflow } from './pages/AIWorkflow';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/ai-workflow" element={<AIWorkflow />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
