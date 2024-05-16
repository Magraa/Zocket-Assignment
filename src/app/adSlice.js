import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  caption: {
    text: "1 & 2 BHK Luxury Apartments at just Rs.34.97Lakhs",
    position: { x: 50, y: 50 },
    max_characters_per_line: 31,
    font_size: 44,
    alignment: "left",
    text_color: "#FFFFFF",
  },
  cta: {
    text: "Shop Now",
    position: {
      x: 190,
      y: 320,
    },
    text_color: "#FFFFFF",
    background_color: "#0369A1",
  },
  image_mask: { x: 56, y: 442, width: 970, height: 600 },
  urls: {
    mask: "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_mask.png",
    stroke:
      "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Mask_stroke.png?random=12",
    design_pattern:
      "https://d273i1jagfl543.cloudfront.net/templates/global_temp_landscape_temp_10_Design_Pattern.png",
  },
  adImage:
    "https://blog.logomyway.com/wp-content/uploads/2020/09/KFC-logo.jpg",
};

export const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    adBgColor: (state,action) => {
        state.cta.background_color = action.payload;
    },
    adImage: (state,action) => {
        state.adImage = action.payload;
    },
    adText: (state,action) => {
        state.caption.text = action.payload
    },
    adCTA: (state,action) => {
        state.cta.text = action.payload;
    },
    
  },
});

export const { adBgColor, adImage, adText, adCTA,caption, cta, image_mask, urls } = adSlice.actions;


export default adSlice.reducer;
