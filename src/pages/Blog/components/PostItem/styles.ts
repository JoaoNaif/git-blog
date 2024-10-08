import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const PostContainer = styled(NavLink)`
  text-decoration: none;

  min-height: 14.25rem;
  min-width: 24rem;

  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid transparent;

  color: ${(props) => props.theme['cyan-300']};
  background: ${(props) => props.theme['cyan-700']};

  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme['cyan-500']};
  }

  div {
    display: flex;
    justify-content: space-between;

    margin-bottom: 1rem;

    h1 {
      font-size: 1.25rem;
      width: 70%;
    }

    span {
      width: 20%;
      font-size: 0.875rem;
      text-align: right;
      color: ${(props) => props.theme['cyan-400']};
    }
  }
`
