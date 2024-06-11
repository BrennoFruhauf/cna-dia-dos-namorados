import React, { CSSProperties } from "react"

type CoracaoProps = {
  size: number
  positionX: string
  positionY: string
  blur?: number
}

export const Coracao = (props: CoracaoProps) => {
  const style: CSSProperties = {
    width: props.size,
    position: "absolute",
    top: props.positionY,
    right: props.positionX,
    filter: `blur(${props.blur ?? 0}px)`,
  }

  return <img title={React.useId()} style={style} src="img/coracao.webp" />
}
