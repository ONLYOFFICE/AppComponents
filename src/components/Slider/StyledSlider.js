import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const toggleThumbCss = css`
  ${props => 
        props.disabled
          ? css`
              background: #E9E9E9;
              cursor: default;
            `
          : css`
              background: #f6f6f6;
              cursor: pointer;
            `
  }
`;

const StyledSlider = styled.input.attrs({
  type: 'range'
})`
  appearance: none;
  outline: none;
  background: transparent;
  offset: hidden;
  width: 202px;
  height: 10px;
  border: 1px solid #D1D1D1;
  padding: 2px 2px;
  margin-right: 16px;
  vertical-align: sub;
  
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid #C5C5C5;
    border-radius: 3px;

    ${props => 
      props.disabled
        ? css`
            background: #E9E9E9;
          `
        : css`
          background: linear-gradient(to right, 
          #4C9ABF, 0%, 
          #4C9ABF ${ ( ((props.value - props.min) / (props.max - props.min)) * 100 ) }%, 
          #E9E9E9 ${ ( ((props.value - props.min) / (props.max - props.min)) * 100 ) }%, 
          #E9E9E9 100%);
        `
    } 
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; 
    width: 10px;
    height: 18px;
    margin-top: -5px;
    border: 1px solid #AAA;
    border-radius: 3px;
   
    ${toggleThumbCss};
  }

  &::-moz-range-track {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid #D1D1D1;
    border-radius: 3px;
    background: #E9E9E9;
  }

  &::-moz-range-progress {
    height: 9px;
    border: 1px solid #D1D1D1;
    border-radius: 3px 0 0 3px;

    ${props => 
      props.disabled  
      ? css`
          background: #E9E9E9;
        `
      : css`
          background: #4C9ABF;
      `
    }
  }
  
  &::-moz-range-thumb {
    width: 8px;
    height: 16px;
    border: 1px solid #AAA;
    border-radius: 3px;

    ${toggleThumbCss};
  }

  &::-ms-track {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  &::-ms-fill-lower {
    height: 8px;
    border: 1px solid #D1D1D1;
    border-radius: 3px;

    ${props => 
      props.disabled  
      ? css`
          background: #E9E9E9;
        `
      : css`
          background: #4C9ABF;
      `
    }
  }

  &::-ms-fill-upper {
    height: 8px;
    background: #E9E9E9;
    border: 1px solid #D1D1D1;
    border-radius: 3px;
  }

  &::-ms-thumb {
    margin-top: 2px;
    width: 8px;
    height: 16px;
    border: 1px solid #AAA;
    border-radius: 3px;

    ${toggleThumbCss};
  }
`;

const StyledWrap = styled.div`
  margin: 0;
  padding: 0;
  display: block;
`;

export {
  StyledSlider,
  StyledWrap
};