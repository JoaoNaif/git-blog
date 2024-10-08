import styled from 'styled-components'

export const SummaryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: ${(props) => props.theme['cyan-800']};

  height: 13.25rem;
  margin-bottom: 2rem;
  padding: 1.5rem 2rem;
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      font-size: 0.75rem;
      font-weight: bold;

      cursor: pointer;
      opacity: 0.8;

      color: ${(props) => props.theme['blue-500']};

      &:hover {
        opacity: 1;
      }
    }
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const ListInfoContainer = styled.ul`
  display: flex;
  gap: 2rem;

  li {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['cyan-500']};

    span {
      color: ${(props) => props.theme['cyan-400']};
    }
  }

  list-style: none;
`
