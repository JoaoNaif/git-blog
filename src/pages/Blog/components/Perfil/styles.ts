import styled from 'styled-components'

export const PerfilContainer = styled.section`
  display: flex;
  gap: 1.75rem;

  height: 13.25rem;
  margin-bottom: 5rem;
  padding: 1.5rem 2rem;
  border-radius: 10px;

  background: ${(props) => props.theme['cyan-800']};

  img {
    height: 100%;
    min-width: 9.5rem;
    min-height: 9.5rem;
    border-radius: 8px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 0.75rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      border-bottom: 2px solid transparent;

      font-weight: bold;
      text-decoration: none;

      color: ${(props) => props.theme['blue-500']};

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme['blue-500']};
      }
    }
  }
`

export const ListInfoContainer = styled.ul`
  list-style: none;

  display: flex;
  gap: 1.25rem;

  li {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    color: ${(props) => props.theme['cyan-500']};

    span {
      display: flex;
      gap: 0.25rem;
      color: ${(props) => props.theme['cyan-200']};
    }
  }
`
