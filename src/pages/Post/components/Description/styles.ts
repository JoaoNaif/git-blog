import styled from 'styled-components'

export const DescriptionContainer = styled.main`
  display: flex;
  gap: 1.5rem;

  padding: 2.5rem 2rem;

  article {
    flex: 1;
    padding: 2rem;

    background: ${(props) => props.theme['cyan-800']};

    border-radius: 10px;

    h3 {
      color: ${(props) => props.theme['blue-500']};
    }

    span {
      display: flex;
      justify-content: center;

      font-size: 4rem;
      font-weight: bold;
    }
  }
`
