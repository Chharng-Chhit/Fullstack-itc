import { useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, House, Package, PlusCircle, UsersRound } from 'lucide-react'

function Navigation({ isCollapsed, onToggle }) {
  const [isTeamOpen, setIsTeamOpen] = useState(true)
  const location = useLocation()
  const isTeamActive = location.pathname.startsWith('/team')

  return (
    <aside className="sidebar">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <NavLink className="brand" to="/">
        <span className="brand-mark">S</span>
        <span className="nav-label">Stock Starter</span>
      </NavLink>
      <p className="sidebar-heading nav-label">Workspace</p>
      <nav className="sidebar-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          <House aria-hidden="true" size={19} />
          <span className="nav-label">Overview</span>
        </NavLink>
        <NavLink to="/products">
          <Package aria-hidden="true" size={19} />
          <span className="nav-label">Products</span>
        </NavLink>
        <NavLink to="/add-product">
          <PlusCircle aria-hidden="true" size={19} />
          <span className="nav-label">Add product</span>
        </NavLink>
        <div className="sidebar-group">
          <button
            className={isTeamActive ? 'sidebar-group-button active' : 'sidebar-group-button'}
            type="button"
            onClick={() => setIsTeamOpen(!isTeamOpen)}
            aria-expanded={isTeamOpen}
            aria-controls="team-submenu"
          >
            <UsersRound aria-hidden="true" size={19} />
            <span className="nav-label">Team</span>
            <span className="group-arrow nav-label">
              {isTeamOpen ? <ChevronUp aria-hidden="true" size={17} /> : <ChevronDown aria-hidden="true" size={17} />}
            </span>
          </button>
          {isTeamOpen && (
            <div className="sidebar-submenu" id="team-submenu">
              <NavLink to="/team/team-1">Team 1</NavLink>
              <NavLink to="/team/team-2">Team 2</NavLink>
            </div>
          )}
        </div>
      </nav>
      <button
        className="sidebar-toggle"
        type="button"
        onClick={onToggle}
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight aria-hidden="true" size={20} /> : <ChevronLeft aria-hidden="true" size={20} />}
      </button>
    </aside>
  )
}

export default Navigation
