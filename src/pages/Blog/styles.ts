import styled from 'styled-components'

export const BlogContainer = styled.main`
  width: 60%;
  margin: -6rem auto;

  display: flex;
  flex-direction: column;
`

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  span {
    display: flex;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['cyan-400']};
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['cyan-600']};
    background: ${(props) => props.theme['cyan-950']};

    &::placeholder {
      color: ${(props) => props.theme['cyan-500']};
    }
  }
`

export const ListPost = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`
