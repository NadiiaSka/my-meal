import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    margin-top: 5rem;
  }
  h1 {
    font-weight: 700;
  }
  p {
    color: var(--grey-600);
  }
`;

export default Wrapper;
