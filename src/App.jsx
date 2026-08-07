import { Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
