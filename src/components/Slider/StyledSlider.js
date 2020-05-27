import styled, { css } from "styled-components";
import { Base } from "../../themes/index";

const toggleThumbCss = css`
  ${props => 
        props.disabled
          ? css`
              border: ${Base.slider.thumbBorderColorDisable};
              background: ${Base.slider.thumbFillDisable};
              cursor: default;
            `
          : css`
              border: ${Base.slider.thumbBorderColorActive};
              background: ${Base.slider.thumbFillActive};
              cursor: pointer;
            `
  }
`;

const toggleProgressBarCss = css`
  ${props => 
      props.disabled  
      ? css`
          background: ${Base.slider.sliderBarColorProgressDisabled};
        `
      : css`
          background: ${Base.slider.sliderBarColorProgress};
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
  width: ${Base.slider.sliderWidth};
  height: ${Base.slider.sliderHeight};
  border: ${props => 
    props.disabled
      ? Base.slider.sliderBarBorderDisable
      : Base.slider.sliderBarBorderActive
    };
  padding: 2px 2px;
  margin-right: 16px;
  vertical-align: sub;
  
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: ${Base.slider.sliderBarBorderActive};
    border-radius: 3px;

    ${props => 
      props.disabled
        ? css`
          background: linear-gradient(to right, 
          ${Base.slider.sliderBarColorProgressDisabled} 0%, 
          ${Base.slider.sliderBarColorProgressDisabled} ${ ( ((props.value - props.min) / (props.max - props.min)) * 100 ) }%, 
          ${Base.slider.sliderBarDisableColor} ${ ( ((props.value - props.min) / (props.max - props.min)) * 100 ) }%, 
          ${Base.slider.sliderBarDisableColor} 100%);
        `
        : css`
          background: linear-gradient(to right, 
          ${Base.slider.sliderBarColorProgress}, 0%, 
          ${Base.slider.sliderBarColorProgress}, ${ ( ((props.value - props.min) / (props.max - props.min)) * 100 ) }%, 
          ${Base.slider.sliderBarColor} ${ ( ((props.value - props.min) / (props.max - props.min)) * 100 ) }%, 
          ${Base.slider.sliderBarColor} 100%);
        `
    } 
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none; 
    width: 10px;
    height: 18px;
    margin-top: -5px;
    border-radius: 3px;
   
    ${toggleThumbCss};
  }

  &::-moz-range-track {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: ${Base.slider.sliderBarBorderActive};
    border-radius: 3px;
    background: ${Base.slider.sliderBarColor};
  }

  &::-moz-range-progress {
    height: 9px;
    border: ${Base.slider.sliderBarBorderActive};
    border-radius: 3px 0 0 3px;

    ${toggleProgressBarCss};
  }
  
  &::-moz-range-thumb {
    width: 8px;
    height: 16px;
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
    border: ${Base.slider.sliderBarBorderActive};
    border-radius: 3px;

    ${toggleProgressBarCss};
  }

  &::-ms-fill-upper {
    height: 8px;
    background: ${Base.slider.sliderBarColor};
    border: ${Base.slider.sliderBarBorderActive};
    border-radius: 3px;
  }

  &::-ms-thumb {
    margin-top: 2px;
    width: 8px;
    height: 16px;
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