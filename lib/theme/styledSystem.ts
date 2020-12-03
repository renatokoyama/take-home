/**
 *  Central place to define constants / types for styled-system props
 */
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  shadow,
  ShadowProps,
  border,
  BorderProps,
  display,
  DisplayProps,
  background,
  BackgroundProps,
  grid,
  GridProps,
  color as ssColor,
  ColorProps as SSColorProps,
  TextColorProps,
  compose,
  system,
} from 'styled-system'

export interface ColorProps extends Omit<SSColorProps, 'color'> {
  textColor?: TextColorProps['color']
}

export const color = compose(
  ssColor,
  system({
    textColor: {
      property: 'color',
      scale: 'colors',
    },
  })
)

export type CommonProps = SpaceProps & LayoutProps & ColorProps & DisplayProps

export type AllProps = CommonProps &
  PositionProps &
  TypographyProps &
  FlexboxProps &
  ShadowProps &
  BorderProps &
  BackgroundProps

export const COMMON = compose(space, color, layout, display)

export const ALL = compose(
  COMMON,
  position,
  typography,
  flexbox,
  shadow,
  border,
  background
)

export type InnerStyledComponent<T, H> = T &
  React.HTMLAttributes<H> & {
    as?: keyof JSX.IntrinsicElements
  }

export type InnerStyledSVG<T, H> = T & React.SVGAttributes<H>

export {
  space,
  layout,
  position,
  typography,
  flexbox,
  shadow,
  border,
  display,
  background,
  grid,
}

export type {
  SpaceProps,
  LayoutProps,
  PositionProps,
  TypographyProps,
  FlexboxProps,
  ShadowProps,
  BorderProps,
  DisplayProps,
  BackgroundProps,
  GridProps,
}
