import styled from "@emotion/styled";

export const TextTitle = styled.div`
  font-weight: 700;
  font-size: 2.417rem;
  text-align: center;
  color: #2c12ff;
`;

export const SpanText = styled.span`
  display: block;
  font-weight: 600;
  font-size: 1.5rem;
  color: #9a9a9a;
  text-align: right;

  cursor: pointer;
`;

// Modal styles

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  padding: 30px 15px;
  overflow: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 400px;
  padding: 2.5rem;
  position: relative;

  svg {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
  }

  p {
    text-align: center;

    margin-bottom: 3.2rem;
  }
`;

interface IModalTitle {
  sm?: boolean;
}

export const ModalTitles = styled.div<IModalTitle>`
  font-weight: 700;
  font-size: 1.8rem;
  color: #000000;

  margin-bottom: 2.1rem;

  ${(props) =>
    props.sm &&
    `
        font-size: 3rem;
        text-align: center;
    `}
`;
