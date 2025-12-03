# Color Matching Challenge

This is a color matching game that allows users to test their precision in guessing color values.

Users need to guess the RGB or HSL values of the random generated color.

## Score Calculation

### RGB Mode

Let RGB values of the question be ($R_1$, $G_1$, $B_1$),\
RGB values of the submitted answer be ($R_2$, $G_2$, $B_2$).

Score = $(1-\sqrt{\frac{(R_1-R_2)^2+(G_1-G_2)^2+(B_1-B_2)^2}{255^2+255^2+255^2}})\times100$

### HSL Mode

Convert the HSL values to RGB values using [this formula](https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB).

Then perform the calculation used in RGB mode.

## Future Developments

- CSS
- Store best results in browser local storage

## Tools Used

- React + Vite