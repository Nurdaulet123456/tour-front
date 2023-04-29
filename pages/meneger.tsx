import React, {useState} from "react";
import styled from "@emotion/styled";
import ProfileLayouts from "@/layouts/ProfileLayouts";
import { TextTitle } from "@/components/atoms/Container";

const Meneger = () => {
    const [show, setShow] = useState<any>()
    const [show1, setShow1] = useState<any>()
    const [show2, setShow2] = useState<any>()
  return (
    <>
      <ProfileLayouts title="Meneger Page">
        <TextTitle>Менеджер</TextTitle>
        <MenegerInner>
          <MenegerFlex>
            <MenegerBlock onClick={() => setShow(!show)}>
              <TextTitle style={{ fontSize: "3.2rem" }}>20%</TextTitle>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem" }}>
                Адамдар саны: 20
              </TextTitle>
            </MenegerBlock>
            <MenegerContent className={show && 'active'}>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>

              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>

              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>
            </MenegerContent>
          </MenegerFlex>
          <MenegerFlex>
            <MenegerBlock onClick={() => setShow1(!show1)}>
              <TextTitle style={{ fontSize: "3.2rem" }}>2%</TextTitle>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem" }}>
                Адамдар саны: 20
              </TextTitle>
            </MenegerBlock>

            <MenegerContent className={show1 && 'active'}>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>

              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>

              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>
            </MenegerContent>
          </MenegerFlex>
          <MenegerFlex>
            <MenegerBlock onClick={() => setShow2(!show2)}>
              <TextTitle style={{ fontSize: "3.2rem" }}>1%</TextTitle>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem" }}>
                Адамдар саны: 20
              </TextTitle>
            </MenegerBlock>

            <MenegerContent className={show2 && 'active'}>
              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>

              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>

              <TextTitle style={{ fontSize: "1.6rem", marginTop: "3.2rem", textAlign: "left" }}>
                Nurdaulet Toregaliyev
              </TextTitle>
            </MenegerContent>
          </MenegerFlex>
        </MenegerInner>
      </ProfileLayouts>
    </>
  );
};

const MenegerInner = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 3rem;
`;

const MenegerFlex = styled.div`
  width: 33.33333%;
`;

const MenegerBlock = styled.div`
  padding-block: 1.5rem;
  padding-inline: 1rem;
  background: #fbfbfb;
  box-shadow: 0px -8px 11px #ffffff, 0px 4px 13px rgba(0, 0, 0, 0.12);
  border-radius: 1rem;
  margin-right: 2.4rem;
  transition: all 0.2s linear;

  cursor: pointer;

  &:hover {
    transform: translateY(-1rem);
  }
`;

const MenegerContent = styled.div`
height: 0;
overflow: hidden;
transition: all 0.2s linear;

&.active {
    height: 100%;
  transition: all 0.2s linear;

}
`;
export default Meneger;
