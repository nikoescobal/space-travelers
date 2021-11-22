import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import planet from '../image/planet.png';
import Missions from './Missions';
import Profiles from './Profiles';
import Rockets from './Rockets';

const Navbar = () => {
  const links = [{
    id: 1,
    path: '/',
    text: 'Rockets',
    name: 'rockets',
  },
  {
    id: 2,
    path: '/missions',
    text: 'Missions',
    name: 'missions',
  },
  {
    id: 3,
    path: '/my-profile',
    text: 'My Profile',
    name: 'my-profile',
  },
  ];

  return (
    <nav className="navbar">
      <header className="logo-container">
        <img
          src={planet}
          alt="Logo"
          className="logo"
        />
        <h1 className="title">
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          Space Travelers & rsquo; Hub
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }

        </h1>
      </header>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      <ul className="links">
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        {
            links.map((link) => (
              // eslint-disable-next-line react/self-closing-comp
              <li
                key={link.id}
                className={link.name}
              >
              </li>
            ))
        }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </ul>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      <div>
        <NavLink
          to={links.path}
          key={links.id}
          style={
            (isActive) => ({
              color: isActive ? 'blue' : '',
            })
        }
        >
          { links.name }
        </NavLink>
      </div>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      <Switch>
        <Route
          exact
          path="/"
          component={Rockets}
        />
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        <Route
          path="/missions"
          component={Missions}
        />
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        <Route
          path="/profiles"
          component={Profiles}
        />
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </Switch>

    </nav>
  );
};

export default Navbar;
